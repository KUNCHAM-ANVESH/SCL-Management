package com.personel.project.schoolpoc.repository;

import com.personel.project.schoolpoc.entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface UserRepository  extends MongoRepository<User, String> {

    Optional<User> findByEmail(String email);
}