package com.techtitans.backend.service.impl;

import com.techtitans.backend.dto.ProductRequestDto;
import com.techtitans.backend.dto.ProductResponseDto;
import com.techtitans.backend.entity.*;
import com.techtitans.backend.mapper.ProductMapper;
import com.techtitans.backend.repository.*;
import com.techtitans.backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {
    // Dependency Injection
    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CompanyRepository companyRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private BenefitRepository benefitRepository;

    @Autowired
    private PriceRepository priceRepository;

    // Function to add product
    @Override
    public ProductResponseDto addProduct(ProductRequestDto productDto) {
        // Assign attributes to product
        ProductEntity productEntity = new ProductEntity();
        productEntity.setProductName(productDto.getProductName());
        productEntity.setProductDescription(productDto.getProductDescription());

        // Check if category exists
        CategoryEntity category = categoryRepository.findById(productDto.getCategory().getCategoryId())
                .orElseGet(() -> categoryRepository.save(productDto.getCategory()));
        productEntity.setCategory(category);

        // Check if company exists
        CompanyEntity company = companyRepository.findById(productDto.getCompany().getCompanyId())
                .orElseGet(() -> companyRepository.save(productDto.getCompany()));
        productEntity.setCompany(company);

        // Save product
        ProductEntity savedProduct = productRepository.save(productEntity);

        // Assign benefit and price
        List<BenefitEntity> benefitEntities = new ArrayList<>();
        for (BenefitEntity benefit : productDto.getBenefits()) {
            PriceEntity price = priceRepository.save(benefit.getPrice());
            benefit.setPrice(price);
            benefit.setBenefitDescription(productDto.getProductDescription());
            benefit.setProduct(savedProduct);
            benefitEntities.add(benefitRepository.save(benefit));
        }
        savedProduct.setBenefits(benefitEntities);

        // Save product
        savedProduct = productRepository.save(savedProduct);

        return ProductMapper.mapToProductDto(savedProduct);
    }

    @Override
    // Function to find all products
    public List<ProductResponseDto> findAllProducts() {
        List<ProductEntity> products = productRepository.findAll();
        return products.stream().map(
                ProductMapper::mapToProductDto
        ).toList();
    }

    // Function to get product by id
    @Override
    public ProductResponseDto findProductById(int productId) {
        ProductEntity productEntity = productRepository.findById(productId).orElseThrow(
                () -> new RuntimeException("Product with id " + productId + " not found")
        );
        return ProductMapper.mapToProductDto(productEntity);
    }
}


