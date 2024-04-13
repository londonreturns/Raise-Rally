package com.techtitans.backend.controller;

import com.techtitans.backend.constants.PathConstants;
import com.techtitans.backend.dto.category.CategoryDto;
import com.techtitans.backend.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

// Making REST API Endpoints
@RestController
@RequestMapping(PathConstants.CATEGORY)
// Request mapping for the controller
public class CategoryController {
    // Service Dependency Injection
    @Autowired
    private CategoryService categoryService;

    // Build add category API
    @PostMapping
    public ResponseEntity<CategoryDto> createCategory(
            @RequestBody CategoryDto categoryDto
    ) {
        System.out.println(categoryDto.getCategoryName());
        CategoryDto savedCategory = categoryService.addCategory(categoryDto);
        return new ResponseEntity<>(savedCategory, HttpStatus.OK);
    }

    // Build get number of product in category
    @GetMapping(PathConstants.GET_BY_ID_PATH)
    public ResponseEntity<Integer> getNumberOfProductsInCategory(
            @PathVariable("id") int categoryId
    ) {
        return new ResponseEntity<>(categoryService.findNumberOfProductsByCategory(categoryId), HttpStatus.OK);
    }
}
