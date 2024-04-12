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
                companyEntity.getDescription(),
                companyEntity.getEmail(),
                companyEntity.isActive(),
                companyEntity.isTicked(),
                companyEntity.getProducts().stream().map(ProductMapper::mapToProductDto).toList()
        );
    }


    // Method to map CompanyDto to Company JPA entity
    public static CompanyEntity mapToCompany(CompanyRequestDto companyDto) {
        return new CompanyEntity(
                companyDto.getCompanyId(),
                companyDto.getName(),
                companyDto.getDescription(),
                companyDto.getEmail(),
                PasswordEncryptionService.encrypt(companyDto.getPassword()),
                companyDto.isActive(),
                companyDto.isTicked(),
                companyDto.getProducts()
        );
    }
}
