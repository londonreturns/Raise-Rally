package com.techtitans.backend.mapper;

import com.techtitans.backend.dto.company.CompanyRequestDto;
import com.techtitans.backend.dto.company.CompanyResponseDto;
import com.techtitans.backend.entity.CompanyEntity;
import com.techtitans.backend.security.PasswordEncryptionService;

import java.util.ArrayList;
import java.util.List;

public class CompanyMapper {
    // Map company JPA entity into CompanyDto
    public static CompanyResponseDto mapToCompanyDto(CompanyEntity companyEntity) {
        try {
            return new CompanyResponseDto(
                    companyEntity.getCompanyId(),
                    companyEntity.getName(),
                    companyEntity.getDescription(),
                    companyEntity.getEmail(),
                    companyEntity.isActive(),
                    companyEntity.isTicked(),
                    companyEntity.getProducts().stream().map(ProductMapper::mapToProductDto).toList()
            );
        } catch (Exception e) {
            return new CompanyResponseDto(
                    companyEntity.getCompanyId(),
                    companyEntity.getName(),
                    companyEntity.getDescription(),
                    companyEntity.getEmail(),
                    companyEntity.isActive(),
                    companyEntity.isTicked()
            );
        }

    }

    public static List<CompanyResponseDto> mapToCompanyDtoList(List<CompanyEntity> companyEntities) {
        var companyDtoList = new ArrayList<CompanyResponseDto>();
        companyEntities.forEach(companyEntity -> {
            try {
                companyDtoList.add(new CompanyResponseDto(
                        companyEntity.getCompanyId(),
                        companyEntity.getName(),
                        companyEntity.getDescription(),
                        companyEntity.getEmail(),
                        companyEntity.isActive(),
                        companyEntity.isTicked(),
                        companyEntity.getProducts().stream().map(ProductMapper::mapToProductDto).toList()
                ));
            } catch (Exception e) {
                companyDtoList.add(new CompanyResponseDto(
                        companyEntity.getCompanyId(),
                        companyEntity.getName(),
                        companyEntity.getDescription(),
                        companyEntity.getEmail(),
                        companyEntity.isActive(),
                        companyEntity.isTicked()
                ));
            }
        });
        return companyDtoList;
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
