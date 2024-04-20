package com.techtitans.backend.repository;

import com.techtitans.backend.entity.BenefitEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BenefitRepository extends JpaRepository<BenefitEntity, Integer> {
}
