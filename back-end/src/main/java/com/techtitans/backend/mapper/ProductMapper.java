package com.techtitans.backend.mapper;

import com.techtitans.backend.dto.ProductRequestDto;
import com.techtitans.backend.dto.ProductResponseDto;
import com.techtitans.backend.entity.ProductEntity;
import com.techtitans.backend.entity.BenefitEntity;

import java.util.stream.Collectors;

public class ProductMapper {
    // Mapping product request dto to entity
    public static ProductEntity mapToProductEntity(ProductRequestDto productRequestDto){
        return new ProductEntity(
                productRequestDto.getProductId(),
                productRequestDto.getProductName(),
                productRequestDto.getProductDescription(),
                productRequestDto.getBenefits(),
                productRequestDto.getCategory(),
                productRequestDto.getCompany()
        );
    }

    // Mapping product entity to response dto
    public static ProductResponseDto mapToProductDto(ProductEntity productEntity){
        return new ProductResponseDto(
                productEntity.getProductId(),
                productEntity.getProductName(),
                productEntity.getProductDescription(),
                productEntity.getBenefits().stream().map(BenefitEntity::getBenefitId).collect(Collectors.toList()),
                productEntity.getCategory().getCategoryId(),
                productEntity.getCompany().getCompanyId()
        );
    }
}
