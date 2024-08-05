package com.testiranje.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;  // Injected repository for database operations

    // Retrieves all users from the repository.
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // Finds a user by their ID.
    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    // Saves a new user to the repository.
    public User createUser(User user) {
        return userRepository.save(user);
    }

    // Updates an existing user if found.
    public Optional<User> updateUser(Long id, User user) {
        return userRepository.findById(id).map(existingUser -> {
            existingUser.setFirstName(user.getFirstName());
            existingUser.setLastName(user.getLastName());
            existingUser.setEmail(user.getEmail());
            existingUser.setPhoneNumber(user.getPhoneNumber());
            return userRepository.save(existingUser);
        });
    }

    // Deletes a user by their ID.
    public boolean deleteUser(Long id) {
        return userRepository.findById(id).map(user -> {
            userRepository.delete(user);
            return true;
        }).orElse(false);
    }

    // Retrieves users based on filter criteria.
    public List<User> getUsersByFilter(String query, String email, String phoneNumber) {
        return userRepository.findUsersByFilter(query, email, phoneNumber);
    }
}
