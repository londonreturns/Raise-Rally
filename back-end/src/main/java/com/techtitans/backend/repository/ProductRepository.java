package com.techtitans.backend.repository;

import com.techtitans.backend.entity.ProductEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<ProductEntity, Integer> {
    List<ProductEntity> findProductEntitiesByCategoryCategoryId(int categoryId);

    List<ProductEntity> findProductEntitiesByCompanyCompanyId(int companyId);
}