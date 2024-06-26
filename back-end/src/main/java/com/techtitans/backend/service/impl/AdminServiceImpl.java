package com.techtitans.backend.service.impl;

import com.techtitans.backend.dto.admin.AdminRequestDto;
import com.techtitans.backend.dto.admin.AdminResponseDto;
import com.techtitans.backend.dto.admin.AdminUpdateRequestDto;
import com.techtitans.backend.dto.password.PasswordDto;
import com.techtitans.backend.entity.AdminEntity;
import com.techtitans.backend.entity.BackerEntity;
import com.techtitans.backend.exception.ResourceNotFoundException;
import com.techtitans.backend.exception.ValidationException;
import com.techtitans.backend.mapper.AdminMapper;
import com.techtitans.backend.mapper.BackerMapper;
import com.techtitans.backend.repository.AdminRepository;
import com.techtitans.backend.security.PasswordEncryptionService;
import com.techtitans.backend.security.Validation;
import com.techtitans.backend.service.AdminService;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@Service
@AllArgsConstructor
public class AdminServiceImpl implements AdminService {
    // Dependency Injection
    @Autowired
    private AdminRepository adminRepository;
    @Override
    // Function to create admin
    public AdminResponseDto createAdmin(AdminRequestDto adminRequestDto){
        int nameMaxLength = 50; // Maximum length for name
        validateRequest(adminRequestDto, nameMaxLength);
        AdminEntity adminEntity = AdminMapper.mapToAdminEntity(adminRequestDto);
        AdminEntity savedAdmin = adminRepository.save(adminEntity);
        return  AdminMapper.mapToAdminDto(savedAdmin);
    }

    @Override
    // Function to get admin from id
    public AdminResponseDto getAdminById(int adminId) {
        // Check if id exists
        AdminEntity adminEntity = adminRepository.findById(adminId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Admin does not exists with the given id " + adminId));
        return AdminMapper.mapToAdminDto(adminEntity);
    }

    // Method to retrieve all admin
    @Override
    public List<AdminResponseDto> getAllAdmins() {
        List<AdminEntity> admins = adminRepository.findAll();
        return admins.stream()
                .map(AdminMapper::mapToAdminDto)
                .collect(Collectors.toList());
    }

    @Override
    // Method to get admin from email
    public AdminResponseDto getAdminByEmail(String adminEmail) {
        // Check if entity exists
        AdminEntity adminEntity = adminRepository.fetchByEmail(adminEmail).orElseThrow(() ->
                new ResourceNotFoundException("Admin does not exists with the given email " + adminEmail));;
        return AdminMapper.mapToAdminDto(adminEntity);
    }

    @Override
    // Function to update admin details by id
    public AdminResponseDto updateAdminById(int adminId, AdminUpdateRequestDto adminUpdateRequestDto) {
        // Validate request dto
        int nameMaxLength = 50; // Maximum length for name
        validateRequest(adminUpdateRequestDto, nameMaxLength);
        // Check if id exists
        AdminEntity adminEntityFromDatabase = adminRepository.findById(adminId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Admin does not exists with the given id " + adminId));

        // Old encrypted password
        String encryptedPassword = PasswordEncryptionService.encrypt(adminUpdateRequestDto.getOldPassword());
        if (!adminEntityFromDatabase.getPassword().equals(encryptedPassword)) {
            throw new ValidationException("Invalid password");
        }

        // Update details
        updateAttributes(adminEntityFromDatabase, adminUpdateRequestDto);
        // Save details to database
        AdminEntity savedAdmin = adminRepository.save(adminEntityFromDatabase);
        return AdminMapper.mapToAdminDto(savedAdmin);
    }

    // Update attributes of entity
    public void updateAttributes(AdminEntity adminEntity, AdminUpdateRequestDto adminUpdateRequestDto){
        adminEntity.setName(adminUpdateRequestDto.getName());
        adminEntity.setPassword(PasswordEncryptionService.encrypt(adminUpdateRequestDto.getNewPassword()));
    }

    @Override
    // Function to delete admin by ID
    public void deleteAdminById(int adminId) {
        // Check if admin exists
        AdminEntity adminEntityFromDatabase = adminRepository.findById(adminId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Admin does not exist with the given ID: " + adminId));
        // Delete company from the database
        adminRepository.deleteById(adminId);
    }

    @Override
    public AdminResponseDto loginAdmin(String email, PasswordDto passwordDto) {
        // Check if email exists
        AdminEntity adminFromDatabase = adminRepository.fetchByEmail(email).orElseThrow(() ->
                new ResourceNotFoundException("Admin does not exists with the given email " + email));
        // Encrypt password
        String encryptedPassword = PasswordEncryptionService.encrypt(passwordDto.getPassword());
        // Comparing passwords
        if (!adminFromDatabase.getPassword().equals(encryptedPassword)) {
            throw new ValidationException("Invalid password");
        }
        return AdminMapper.mapToAdminDto(adminFromDatabase);
    }

    // Validate while updating
    public static void validateRequest(AdminUpdateRequestDto adminUpdateRequestDto, int  nameMaxLength){
        if (!Validation.isNameValid(adminUpdateRequestDto.getName(), nameMaxLength) ||
                !Validation.isPasswordValid(adminUpdateRequestDto.getOldPassword()) ||
                !Validation.isPasswordValid(adminUpdateRequestDto.getNewPassword())) {
            throw new ValidationException("Validation error");
        }
    }


    // Validate RequestDTO while creating
    public static void validateRequest(AdminRequestDto adminRequestDto, int nameMaxLength){
        if (!Validation.isNameValid(adminRequestDto.getName(), nameMaxLength) ||
                !Validation.isEmailValid(adminRequestDto.getEmail()) ||
                !Validation.isPasswordValid(adminRequestDto.getPassword())) {
            throw new ValidationException("Validation error");
        }
    }
}
