package com.techtitans.backend.controller;

import com.techtitans.backend.constants.PathConstants;
import com.techtitans.backend.dto.company.CompanyResponseDto;
import com.techtitans.backend.dto.product.ProductRequestDto;
import com.techtitans.backend.dto.product.ProductResponseDto;
import com.techtitans.backend.entity.CompanyEntity;
import com.techtitans.backend.entity.ProductEntity;
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

    // Build update product by API
    @PatchMapping(PathConstants.GET_BY_ID_PATH)
    public ResponseEntity<ProductResponseDto> updateProduct(
            @PathVariable("id") int productId,
            @RequestBody ProductRequestDto productRequestDto
    ) {
        ProductResponseDto updatedProduct = productService.updateProduct(productId, productRequestDto);
        return new ResponseEntity<>(updatedProduct, HttpStatus.OK);
    }

    // Build delete product by API
    @DeleteMapping(PathConstants.GET_BY_ID_PATH)
    public ResponseEntity<String> deleteProductById(
            @PathVariable("id") int productId
    ) {
        productService.deleteProduct(productId);
        return new ResponseEntity<>("Product deleted", HttpStatus.OK);
    }

    // Build get all products by category
    @GetMapping("/category" + PathConstants.GET_BY_ID_PATH)
    public ResponseEntity<List<ProductResponseDto>> getAllProductsByCategory(
            @PathVariable("id") int categoryId
    ) {
        List<ProductResponseDto> products = productService.findAllProductsByCategory(categoryId);
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    // Build get all products by company
    @GetMapping("/company" + PathConstants.GET_BY_ID_PATH)
    public ResponseEntity<List<ProductResponseDto>> getAllProductsByCompany(
            @PathVariable("id") int companyId
    ) {
        List<ProductResponseDto> products = productService.findAllProductsByCompany(companyId);
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    //Build get product REST API for backer
    @GetMapping("/search")
    public ResponseEntity<List<ProductResponseDto>> searchProduct(@RequestParam("query") String query) {
        return ResponseEntity.ok(productService.searchProduct(query, false));
    }

    //Build get product for specific REST API for backer
    @GetMapping("/search/category" + PathConstants.GET_BY_ID_PATH)
    public ResponseEntity<List<ProductResponseDto>> searchProductByCategory(
            @RequestParam("query") String query,
            @PathVariable("id") int categoryId
    ) {
        return ResponseEntity.ok(productService.searchProductByCategory(query, false, categoryId));
    }

    //Build get product for specific REST API for backer
    @GetMapping("/admin/search/category" + PathConstants.GET_BY_ID_PATH)
    public ResponseEntity<List<ProductResponseDto>> adminSearchProductByCategory(
            @RequestParam("query") String query,
            @PathVariable("id") int categoryId
    ) {
        return ResponseEntity.ok(productService.searchProductByCategory(query, true, categoryId));
    }

    //Build get product REST API for admin
    @GetMapping("admin/search")
    public ResponseEntity<List<ProductResponseDto>> adminSearchProduct(@RequestParam("query") String query) {
        return ResponseEntity.ok(productService.searchProduct(query, true));
    }

    //Build product REST API for enable and disable function
    @PatchMapping("/enable/{id}/{enabled}")
    public ResponseEntity<ProductResponseDto> enableProduct(@PathVariable("enabled") boolean enabled, @PathVariable("id") int id) {
        return ResponseEntity.ok(this.productService.enableProduct(id, enabled));
    }

    //Build REST API for featuring product
    @PatchMapping("/feature/{id}/{featured}")
    public ResponseEntity<ProductResponseDto> featureProduct(@PathVariable("featured") boolean featured, @PathVariable("id") int id) {
        return ResponseEntity.ok(this.productService.featureProduct(id, featured));
    }

    // Get number of backers by product
    @GetMapping(PathConstants.NUMBEROF + "backers-by-product/{id}")
    public ResponseEntity<Integer> getNumberOfBackers(
            @PathVariable("id") int id
    ) {
        Integer backerCount = productService.findBackerCountByProductId(id);
        return new ResponseEntity<>(backerCount, HttpStatus.OK);
    }

    // Get funded products by backer id
    @GetMapping("/fundedproducts" + PathConstants.GET_BY_ID_PATH)
    public ResponseEntity<List<ProductResponseDto>> getFundedProductsByBackerId(
            @PathVariable("id") int backerId
    ){
        List<ProductResponseDto> products = productService.findFundedProductsByBackerId(backerId);
        return new ResponseEntity<>(products, HttpStatus.OK);
    }
}
