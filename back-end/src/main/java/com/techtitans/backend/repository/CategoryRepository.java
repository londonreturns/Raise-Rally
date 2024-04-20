package com.techtitans.backend.repository;

import com.techtitans.backend.entity.CategoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryRepository extends JpaRepository<CategoryEntity, Integer> {

    @Query("SELECT c.categoryName, COUNT(p) FROM CategoryEntity c JOIN c.products p WHERE c.categoryId = :categoryId GROUP BY c.categoryName")
    List<Object[]> findNumberOfProductsByCategory(int categoryId);
}
