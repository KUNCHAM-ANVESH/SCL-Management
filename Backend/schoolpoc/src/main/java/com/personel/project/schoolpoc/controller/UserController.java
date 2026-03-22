package com.personel.project.schoolpoc.controller;

import com.personel.project.schoolpoc.dto.LoginRequestDto;
import com.personel.project.schoolpoc.dto.LoginResponseDto;
import com.personel.project.schoolpoc.dto.UserRegisterDto;
import com.personel.project.schoolpoc.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/schoolpoc/user")
@CrossOrigin(origins = "http://localhost:5173/")
public class UserController {

    @Autowired
    private UserService userService;


    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody UserRegisterDto dto) {
        return ResponseEntity.ok(userService.registerUser(dto));
    }


    @PostMapping("/login")
    public ResponseEntity<LoginResponseDto> loginUser(@RequestBody LoginRequestDto dto) {
        return ResponseEntity.ok(userService.loginUser(dto));
    }
}