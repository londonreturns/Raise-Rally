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

@RestController
@RequestMapping(PathConstants.PRODUCT)
@AllArgsConstructor
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping
    public ResponseEntity<ProductResponseDto> addProduct(@RequestBody ProductRequestDto productRequestDto) {
        ProductResponseDto savedProduct = productService.addProduct(productRequestDto);
        return new ResponseEntity<>(savedProduct, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<ProductResponseDto>> getAllProducts() {
        List<ProductResponseDto> allProducts = productService.findAllProducts();
        return new ResponseEntity<>(allProducts, HttpStatus.OK);
    }

    @GetMapping(PathConstants.GET_BY_ID_PATH)
    public ResponseEntity<ProductResponseDto> getProductById(
            @PathVariable("id") int productId
    ) {
        ProductResponseDto productById = productService.findProductById(productId);
        return new ResponseEntity<>(productById, HttpStatus.OK);
    }

}
