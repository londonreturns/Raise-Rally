package com.techtitans.backend.service.impl;

import com.techtitans.backend.dto.product.ProductRequestDto;
import com.techtitans.backend.dto.product.ProductResponseDto;
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
        productEntity.setProductGoal(productDto.getProductGoal());
        productEntity.setStartDate(productDto.getStartDate());
        productEntity.setEndDate(productDto.getEndDate());
        productEntity.setCurrentAmount(0);

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

    @Override
    // Function to update product
    public ProductResponseDto updateProduct(int productId, ProductRequestDto productRequestDto) {
        // Find the existing product entity
        ProductEntity existingProduct = productRepository.findById(productId).orElseThrow(
                () -> new RuntimeException("Product with id " + productId + " not found")
        );

        // Update attributes of the existing product entity
        existingProduct.setProductName(productRequestDto.getProductName());
        existingProduct.setProductDescription(productRequestDto.getProductDescription());

        // Check and update category if necessary
        CategoryEntity category = categoryRepository.findById(productRequestDto.getCategory().getCategoryId())
                .orElseGet(() -> categoryRepository.save(productRequestDto.getCategory()));
        existingProduct.setCategory(category);

        // Check and update company if necessary
        CompanyEntity company = companyRepository.findById(productRequestDto.getCompany().getCompanyId())
                .orElseGet(() -> companyRepository.save(productRequestDto.getCompany()));
        existingProduct.setCompany(company);

        // Update benefits and prices
        List<BenefitEntity> updatedBenefits = new ArrayList<>();
        for (BenefitEntity benefit : productRequestDto.getBenefits()) {
            // Check if benefit already exists or create new if necessary
            BenefitEntity updatedBenefit = benefitRepository.findById(benefit.getBenefitId())
                    .orElseGet(() -> benefitRepository.save(benefit));
            updatedBenefit.setPrice(priceRepository.save(benefit.getPrice())); // Update price
            updatedBenefit.setBenefitDescription(productRequestDto.getProductDescription());
            updatedBenefit.setProduct(existingProduct);
            updatedBenefits.add(updatedBenefit);
        }
        existingProduct.setBenefits(updatedBenefits);

        // Save the updated product entity
        ProductEntity updatedProduct = productRepository.save(existingProduct);

        return ProductMapper.mapToProductDto(updatedProduct);
    }

    @Override
    // Function to delete product
    public void deleteProduct(int productId) {
        // Find the existing product entity
        productRepository.findById(productId).orElseThrow(
                () -> new RuntimeException("Product with id " + productId + " not found"));
        productRepository.deleteById(productId);
    }

    @Override
    // Function to find all products by category
    public List<ProductResponseDto> findAllProductsByCategory(int categoryId) {
        // Find the existing category entity
        categoryRepository.findById(categoryId).orElseThrow(
                () -> new RuntimeException("Category with id " + categoryId + " not found")
        );
        List<ProductEntity> products = productRepository.findProductEntitiesByCategoryCategoryId(categoryId);
        return products.stream().map(ProductMapper::mapToProductDto).toList();
    }

    @Override
    // Function to find all products by company
    public List<ProductResponseDto> findAllProductsByCompany(int companyId) {
        // Find the existing company entity
        companyRepository.findById(companyId).orElseThrow(
                () -> new RuntimeException("Company with id " + companyId + " not found")
        );
        List<ProductEntity> products = productRepository.findProductEntitiesByCompanyCompanyId(companyId);
        return products.stream().map(ProductMapper::mapToProductDto).toList();
    }
}


