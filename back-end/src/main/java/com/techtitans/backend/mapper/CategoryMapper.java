package com.techtitans.backend.mapper;

import com.techtitans.backend.dto.category.CategoryDto;
import com.techtitans.backend.entity.CategoryEntity;

public class CategoryMapper {
    // Mapping category dto to entity
    public static CategoryEntity mapToCategoryEntity(CategoryDto categoryDto) {
        return new CategoryEntity(
                categoryDto.getCategoryId(),
                categoryDto.getCategoryName(),
                categoryDto.getProducts()
        );
    }

    // Mapping benefit category to dto
    public static CategoryDto mapToCategoryDto(CategoryEntity categoryEntity) {
        return new CategoryDto(
                categoryEntity.getCategoryId(),
                categoryEntity.getCategoryName(),
                categoryEntity.getProducts()
        );
    }
}
