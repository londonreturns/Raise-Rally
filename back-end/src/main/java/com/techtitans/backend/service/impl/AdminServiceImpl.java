package com.techtitans.backend.service.impl;

import com.techtitans.backend.dto.AdminRequestDto;
import com.techtitans.backend.dto.AdminResponseDto;
import com.techtitans.backend.entity.AdminEntity;
import com.techtitans.backend.exception.ValidationException;
import com.techtitans.backend.mapper.AdminMapper;
import com.techtitans.backend.repository.AdminRepository;
import com.techtitans.backend.security.Validation;
import com.techtitans.backend.service.AdminService;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
@AllArgsConstructor
public class AdminServiceImpl implements AdminService {
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

    // Validate RequestDTO
    public static void validateRequest(AdminRequestDto adminRequestDto){
        if (!Validation.isNameValid(adminRequestDto.getName()) ||
                !Validation.isEmailValid(adminRequestDto.getEmail()) ||
                !Validation.isPasswordValid(adminRequestDto.getPassword())) {
            throw new ValidationException("Validation error");
        }
    }
}
