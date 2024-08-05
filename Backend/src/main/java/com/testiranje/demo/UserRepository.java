package com.testiranje.demo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {
    // Find users by matching firstName, lastName, email, or phoneNumber
    @Query("SELECT u FROM User u WHERE " +
            "(:query IS NULL OR u.firstName LIKE %:query% OR u.lastName LIKE %:query%) AND " +
            "(:email IS NULL OR u.email = :email) AND " +
            "(:phoneNumber IS NULL OR u.phoneNumber = :phoneNumber)")
    List<User> findUsersByFilter(String query, String email, String phoneNumber);
}
