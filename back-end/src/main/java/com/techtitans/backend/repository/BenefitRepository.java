package com.techtitans.backend.repository;

import com.techtitans.backend.entity.BenefitEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BenefitRepository extends JpaRepository<BenefitEntity, Integer> {
    // Get all benefits from product id
    List<BenefitEntity> getBenefitEntitiesByProductProductId(int productId);
}
