package com.personel.project.schoolpoc.service;

import com.personel.project.schoolpoc.dto.LoginRequestDto;
import com.personel.project.schoolpoc.dto.LoginResponseDto;
import com.personel.project.schoolpoc.dto.UserRegisterDto;

public interface UserService {

    String registerUser(UserRegisterDto dto);

    LoginResponseDto loginUser(LoginRequestDto dto);
}