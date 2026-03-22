package com.personel.project.schoolpoc.service.impl;

import com.personel.project.schoolpoc.dto.LoginRequestDto;
import com.personel.project.schoolpoc.dto.LoginResponseDto;
import com.personel.project.schoolpoc.dto.UserRegisterDto;
import com.personel.project.schoolpoc.entity.User;
import com.personel.project.schoolpoc.exception.InvalidCredentialsException;
import com.personel.project.schoolpoc.exception.UserAlreadyExistsException;
import com.personel.project.schoolpoc.exception.UserNotFoundException;
import com.personel.project.schoolpoc.repository.UserRepository;
import com.personel.project.schoolpoc.security.JwtUtil;
import com.personel.project.schoolpoc.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtil jwtUtil;


    @Override
    public String registerUser(UserRegisterDto dto) {


        userRepository.findByEmail(dto.getEmail())
                .ifPresent(user -> {
                    throw new UserAlreadyExistsException("Email already registered!");
                });

        // Create user entity
        User user = new User();
        user.setId(dto.getId());
        user.setFirstName(dto.getFirstName());
        user.setLastName(dto.getLastName());
        user.setEmail(dto.getEmail());
        user.setPassword(passwordEncoder.encode(dto.getPassword())); // encrypt password
        user.setRole(dto.getRole());
        user.setGender(dto.getGender());

        userRepository.save(user);

        return "User Registered Successfully";
    }


    @Override
    public LoginResponseDto loginUser(LoginRequestDto dto) {

        // Check user exists
        User user = userRepository.findByEmail(dto.getEmail())
                .orElseThrow(() -> new UserNotFoundException("User not found"));

        // Validate password
        if (!passwordEncoder.matches(dto.getPassword(), user.getPassword())) {
            throw new InvalidCredentialsException("Invalid password");
        }

        // Generate JWT token
        String token = jwtUtil.generateToken(user.getEmail());

        // Return login response
        return new LoginResponseDto(
                token,
                user.getId(),
                user.getFirstName(),
                user.getLastName(),
                user.getEmail(),
                user.getRole(),
                user.getGender()
        );
    }
}