package com.techtitans.backend.service;

import com.techtitans.backend.dto.CategoryDto;

public interface CategoryService {
    CategoryDto addCategory(CategoryDto categoryDto);

    int findNumberOfProductsByCategory(int categoryId);
}
