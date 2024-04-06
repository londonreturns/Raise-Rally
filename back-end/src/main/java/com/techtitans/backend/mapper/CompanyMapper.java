package com.techtitans.backend.mapper;

import com.techtitans.backend.dto.CompanyRequestDto;
import com.techtitans.backend.dto.CompanyResponseDto;
import com.techtitans.backend.entity.CompanyEntity;
import com.techtitans.backend.security.PasswordEncryptionService;

public class CompanyMapper {
    // Map company JPA entity into CompanyDto
    public static CompanyResponseDto mapToCompanyDto(CompanyEntity companyEntity) {
        return new CompanyResponseDto(
                companyEntity.getCompanyId(),
                companyEntity.getName(),
                companyEntity.getEmail(),
                companyEntity.getActive(),
                companyEntity.getTicked()
        );
    }

    //Method to map CompanyDto to Company JPA entity
    public static CompanyEntity mapToCompany(CompanyRequestDto companyDto) {
        PasswordEncryptionService passwordService = new PasswordEncryptionService();
        return new CompanyEntity(
                companyDto.getCompanyId(),
                companyDto.getName(),
                companyDto.getEmail(),
                companyDto.getActive(),
                companyDto.getTicked(),
                passwordService.encrypt(companyDto.getPassword())
        );
    }
}
