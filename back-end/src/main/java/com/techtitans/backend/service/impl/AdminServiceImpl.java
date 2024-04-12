package com.techtitans.backend.service.impl;

import com.techtitans.backend.dto.AdminRequestDto;
import com.techtitans.backend.dto.AdminResponseDto;
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
        Optional<AdminEntity> adminEntity = adminRepository.fetchByEmail(adminEmail);
        // Check if entity exists
        if (adminEntity.isPresent()) {
            return AdminMapper.mapToAdminDto(adminEntity.get());
        }
        throw new ResourceNotFoundException("Admin does not exists with the given email " + adminEmail);
    }

    @Override
    // Function to update admin details by id
    public AdminResponseDto updateAdminById(int adminId, AdminRequestDto adminRequestDto) {
        // Validate request dto
        validateRequest(adminRequestDto);
        // Check if id exists
        AdminEntity adminEntityFromDatabase = adminRepository.findById(adminId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Admin does not exists with the given id " + adminId));
        // Update details
        updateAttributes(adminEntityFromDatabase, adminRequestDto);
        // Save details to database
        AdminEntity savedAdmin = adminRepository.save(adminEntityFromDatabase);
        return AdminMapper.mapToAdminDto(savedAdmin);
    }

    // Update attributes of entity
    public void updateAttributes(AdminEntity adminEntity, AdminRequestDto adminRequestDto){
        adminEntity.setName(adminRequestDto.getName());
        adminEntity.setEmail(adminRequestDto.getEmail());
        adminEntity.setPassword(PasswordEncryptionService.encrypt(adminRequestDto.getPassword()));
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
    public static void validateRequest(AdminRequestDto adminRequestDto){
        if (!Validation.isNameValid(adminRequestDto.getName()) ||
                !Validation.isEmailValid(adminRequestDto.getEmail()) ||
                !Validation.isPasswordValid(adminRequestDto.getPassword())) {
            throw new ValidationException("Validation error");
        }
    }
}
