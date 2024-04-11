package com.techtitans.backend.controller;

import com.techtitans.backend.constants.PathConstants;
import com.techtitans.backend.dto.CategoryDto;
import com.techtitans.backend.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(PathConstants.CATEGORY)
public class CategoryController {
    @Autowired
    private CategoryService categoryService;

    @PostMapping
    public ResponseEntity<CategoryDto> createCategory(
            @RequestBody CategoryDto categoryDto
    ) {
        System.out.println(categoryDto.getCategoryName());
        CategoryDto savedCategory = categoryService.addCategory(categoryDto);
        return new ResponseEntity<>(savedCategory, HttpStatus.OK);
    }

    @GetMapping(PathConstants.GET_BY_ID_PATH)
    public ResponseEntity<Integer> getNumberOfProductsInCategory(
            @PathVariable("id") int categoryId
    ) {
        return new ResponseEntity<>(categoryService.findNumberOfProductsByCategory(categoryId), HttpStatus.OK);
    }
}
