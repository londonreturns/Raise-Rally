package com.techtitans.backend.controller;

import com.techtitans.backend.constants.PathConstants;
import com.techtitans.backend.dto.ProductRequestDto;
import com.techtitans.backend.dto.ProductResponseDto;
import com.techtitans.backend.service.ProductService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// Making REST API Endpoints
@RestController
@RequestMapping(PathConstants.PRODUCT)
@AllArgsConstructor
// Request mapping for the controller
public class ProductController {
    // Service Dependency Injection
    @Autowired
    private ProductService productService;

    // Build add product API
    @PostMapping
    public ResponseEntity<ProductResponseDto> addProduct(@RequestBody ProductRequestDto productRequestDto) {
        ProductResponseDto savedProduct = productService.addProduct(productRequestDto);
        return new ResponseEntity<>(savedProduct, HttpStatus.CREATED);
    }

    // Build get all products API
    @GetMapping
    public ResponseEntity<List<ProductResponseDto>> getAllProducts() {
        List<ProductResponseDto> allProducts = productService.findAllProducts();
        return new ResponseEntity<>(allProducts, HttpStatus.OK);
    }

    // Build get product by API
    @GetMapping(PathConstants.GET_BY_ID_PATH)
    public ResponseEntity<ProductResponseDto> getProductById(
            @PathVariable("id") int productId
    ) {
        ProductResponseDto productById = productService.findProductById(productId);
        return new ResponseEntity<>(productById, HttpStatus.OK);
    }

}
