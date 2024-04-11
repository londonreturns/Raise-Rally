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

    @Override
    public ProductResponseDto addProduct(ProductRequestDto productDto) {
        ProductEntity productEntity = new ProductEntity();
        productEntity.setProductName(productDto.getProductName());
        productEntity.setProductDescription(productDto.getProductDescription());

        CategoryEntity category = categoryRepository.findById(productDto.getCategory().getCategoryId())
                .orElseGet(() -> categoryRepository.save(productDto.getCategory()));
        productEntity.setCategory(category);

        CompanyEntity company = companyRepository.findById(productDto.getCompany().getCompanyId())
                .orElseGet(() -> companyRepository.save(productDto.getCompany()));
        productEntity.setCompany(company);

        ProductEntity savedProduct = productRepository.save(productEntity);

        List<BenefitEntity> benefitEntities = new ArrayList<>();
        for (BenefitEntity benefit : productDto.getBenefits()) {
            PriceEntity price = priceRepository.save(benefit.getPrice());
            benefit.setPrice(price);
            benefit.setBenefitDescription(productDto.getProductDescription());
            benefit.setProduct(savedProduct);
            benefitEntities.add(benefitRepository.save(benefit));
        }
        savedProduct.setBenefits(benefitEntities);

        savedProduct = productRepository.save(savedProduct);

        return ProductMapper.mapToProductDto(savedProduct);
    }

    @Override
    public List<ProductResponseDto> findAllProducts() {
        List<ProductEntity> products = productRepository.findAll();
        return products.stream().map(
                ProductMapper::mapToProductDto
        ).toList();
    }

    @Override
    public ProductResponseDto findProductById(int productId) {
        ProductEntity productEntity = productRepository.findById(productId).orElseThrow(
                () -> new RuntimeException("Product with id " + productId + " not found")
        );
        return ProductMapper.mapToProductDto(productEntity);
    }
}


