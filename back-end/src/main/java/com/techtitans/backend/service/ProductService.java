package com.techtitans.backend.service;

import com.techtitans.backend.dto.product.ProductRequestDto;
import com.techtitans.backend.dto.product.ProductResponseDto;
import com.techtitans.backend.entity.CompanyEntity;
import com.techtitans.backend.entity.ProductEntity;

import java.util.List;

public interface ProductService {
    ProductResponseDto addProduct(ProductRequestDto productRequestDto);

    List<ProductResponseDto> findAllProducts();

    ProductResponseDto findProductById(int productId);

    ProductResponseDto updateProduct(int productId, ProductRequestDto productRequestDto);

    void deleteProduct(int productId);

    List<ProductResponseDto> findAllProductsByCategory(int categoryId);

    List<ProductResponseDto> findAllProductsByCompany(int companyId);

    List<ProductEntity> searchProduct(String query);
}
