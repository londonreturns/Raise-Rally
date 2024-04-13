package com.techtitans.backend.service.impl;

import com.techtitans.backend.dto.category.CategoryDto;
import com.techtitans.backend.entity.CategoryEntity;
import com.techtitans.backend.mapper.CategoryMapper;
import com.techtitans.backend.repository.CategoryRepository;
import com.techtitans.backend.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService {
    // Dependency Injection
    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    // Function to create category
    public CategoryDto addCategory(CategoryDto categoryDto) {
        CategoryEntity savedCategory = categoryRepository.save(CategoryMapper.mapToCategoryEntity(categoryDto));
        return CategoryMapper.mapToCategoryDto(savedCategory);
    }

    @Override
    // Function to find number of products by category
    public int findNumberOfProductsByCategory(int categoryId) {
        List<Object[]> numberOfProductsByCategory = categoryRepository.findNumberOfProductsByCategory(categoryId);
        return numberOfProductsByCategory.size();
    }
}
