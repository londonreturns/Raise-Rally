package com.techtitans.backend.repository;

import com.techtitans.backend.entity.CompanyEntity;
import com.techtitans.backend.entity.ProductEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<ProductEntity, Integer> {
    List<ProductEntity> findProductEntitiesByCategoryCategoryId(int categoryId);

    List<ProductEntity> findProductEntitiesByCompanyCompanyId(int companyId);

    //Custom query for finding product through name
    @Query("SELECT p FROM ProductEntity p WHERE " +
            "p.productName LIKE CONCAT('%', :query, '%')")
    List<ProductEntity> searchProduct(@Param("query") String query);
}