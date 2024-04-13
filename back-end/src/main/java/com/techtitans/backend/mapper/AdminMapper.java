package com.techtitans.backend.mapper;

import com.techtitans.backend.dto.admin.AdminRequestDto;
import com.techtitans.backend.dto.admin.AdminResponseDto;
import com.techtitans.backend.entity.AdminEntity;
import com.techtitans.backend.security.PasswordEncryptionService;

public class AdminMapper {

    // Mapping admin entity to admin response dto
    public static AdminResponseDto mapToAdminDto(AdminEntity adminEntity){
        return new AdminResponseDto(
                adminEntity.getAdminId(),
                adminEntity.getName(),
                adminEntity.getEmail());
    }

    // Mapping AdminRequestDto to Company  entity
    public static AdminEntity mapToAdminEntity(AdminRequestDto adminRequestDto){
        return new AdminEntity(
                adminRequestDto.getAdminId(),
                adminRequestDto.getName(),
                adminRequestDto.getEmail(),
                PasswordEncryptionService.encrypt( adminRequestDto.getPassword()));
    }
}
