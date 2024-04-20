package com.techtitans.backend.service;

import com.techtitans.backend.dto.category.CategoryDto;

public interface CategoryService {
    CategoryDto addCategory(CategoryDto categoryDto);

    int findNumberOfProductsByCategory(int categoryId);
}
