package com.techtitans.backend.mapper;

import com.techtitans.backend.dto.company.CompanyResponseDto;
import com.techtitans.backend.dto.product.ProductRequestDto;
import com.techtitans.backend.dto.product.ProductResponseDto;
import com.techtitans.backend.entity.CompanyEntity;
import com.techtitans.backend.entity.ProductEntity;
import com.techtitans.backend.entity.BenefitEntity;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class ProductMapper {
    // Mapping product request dto to entity
    public static ProductEntity mapToProductEntity(ProductRequestDto productRequestDto){
        return new ProductEntity(
                productRequestDto.getProductId(),
                productRequestDto.getProductName(),
                productRequestDto.getProductDescription(),
                productRequestDto.getProductGoal(),
                productRequestDto.isActive(),
                productRequestDto.getCurrentAmount(),
                productRequestDto.getStartDate(),
                productRequestDto.getEndDate(),
                productRequestDto.getBenefits(),
                productRequestDto.getCategory(),
                productRequestDto.getCompany()
        );
    }

    public static ProductResponseDto mapToProductDtoList(ProductEntity productEntity) {
        try {
            return new ProductResponseDto(
                    productEntity.getProductId(),
                    productEntity.getProductName(),
                    productEntity.getProductDescription(),
                    productEntity.getProductGoal(),
                    productEntity.isActive(),
                    productEntity.getCurrentAmount(),
                    productEntity.getStartDate(),
                    productEntity.getEndDate(),
                    productEntity.getBenefits().stream().map(BenefitEntity::getBenefitId).collect(Collectors.toList()),
                    productEntity.getCategory().getCategoryId(),
                    productEntity.getCompany().getCompanyId()
            );
        } catch (Exception e) {
            return new ProductResponseDto(
                    productEntity.getProductId(),
                    productEntity.getProductName(),
                    productEntity.getProductDescription(),
                    productEntity.getProductGoal(),
                    productEntity.isActive(),
                    productEntity.getCurrentAmount(),
                    productEntity.getStartDate(),
                    productEntity.getEndDate(),
                    productEntity.getBenefits().stream().map(BenefitEntity::getBenefitId).collect(Collectors.toList()),
                    productEntity.getCategory().getCategoryId(),
                    productEntity.getCompany().getCompanyId()
            );
        }
    }


    // Mapping product entity to response dto
    public static ProductResponseDto mapToProductDto(ProductEntity productEntity){
        return new ProductResponseDto(
                productEntity.getProductId(),
                productEntity.getProductName(),
                productEntity.getProductDescription(),
                productEntity.getProductGoal(),
                productEntity.isActive(),
                productEntity.getCurrentAmount(),
                productEntity.getStartDate(),
                productEntity.getEndDate(),
                productEntity.getBenefits().stream().map(BenefitEntity::getBenefitId).collect(Collectors.toList()),
                productEntity.getCategory().getCategoryId(),
                productEntity.getCompany().getCompanyId()
        );
    }
}
