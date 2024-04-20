package com.techtitans.backend.service;

import com.techtitans.backend.dto.product.ProductRequestDto;
import com.techtitans.backend.dto.product.ProductResponseDto;

import java.util.List;

public interface ProductService {
    ProductResponseDto addProduct(ProductRequestDto productRequestDto);

    List<ProductResponseDto> findAllProducts();

    ProductResponseDto findProductById(int productId);

    ProductResponseDto updateProduct(int productId, ProductRequestDto productRequestDto);

    void deleteProduct(int productId);

    List<ProductResponseDto> findAllProductsByCategory(int categoryId);

    List<ProductResponseDto> findAllProductsByCompany(int companyId);
}
