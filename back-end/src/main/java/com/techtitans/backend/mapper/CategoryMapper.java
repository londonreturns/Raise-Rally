package com.techtitans.backend.mapper;

import com.techtitans.backend.dto.CategoryDto;
import com.techtitans.backend.entity.CategoryEntity;

public class CategoryMapper {
    public static CategoryEntity mapToCategoryEntity(CategoryDto categoryDto) {
        return new CategoryEntity(
                categoryDto.getCategoryId(),
                categoryDto.getCategoryName(),
                categoryDto.getProducts()
        );
    }

    public static CategoryDto mapToCategoryDto(CategoryEntity categoryEntity) {
        return new CategoryDto(
                categoryEntity.getCategoryId(),
                categoryEntity.getCategoryName(),
                categoryEntity.getProducts()
        );
    }
}
