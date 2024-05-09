package com.techtitans.backend.service.impl;

import com.techtitans.backend.dto.admin.AdminRequestDto;
import com.techtitans.backend.dto.admin.AdminResponseDto;
import com.techtitans.backend.dto.admin.AdminUpdateRequestDto;
import com.techtitans.backend.entity.AdminEntity;
import com.techtitans.backend.exception.ResourceNotFoundException;
import com.techtitans.backend.exception.ValidationException;
import com.techtitans.backend.mapper.AdminMapper;
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
        validateRequest(adminRequestDto);
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
                new ResourceNotFoundException("Backer does not exists with the given email " + adminEmail));;
        return AdminMapper.mapToAdminDto(adminEntity);
    }

    @Override
    // Function to update admin details by id
    public AdminResponseDto updateAdminById(int adminId, AdminUpdateRequestDto adminUpdateRequestDto) {
        // Validate request dto
        validateRequest(adminUpdateRequestDto);
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

    // Validate RequestDTO
    public static void validateRequest(AdminUpdateRequestDto adminUpdateRequestDto){
        if (!Validation.isNameValid(adminUpdateRequestDto.getName()) ||
                !Validation.isPasswordValid(adminUpdateRequestDto.getOldPassword()) ||
                !Validation.isPasswordValid(adminUpdateRequestDto.getNewPassword())) {
            throw new ValidationException("Validation error");
        }
    }

    // Validate RequestDTO
    public static void validateRequest(AdminRequestDto adminRequestDto){
        if (!Validation.isNameValid(adminRequestDto.getName()) ||
                !Validation.isEmailValid(adminRequestDto.getEmail()) ||
                !Validation.isPasswordValid(adminRequestDto.getPassword())) {
            throw new ValidationException("Validation error");
        }
    }
}
