package com.techtitans.backend.repository;

import com.techtitans.backend.entity.ContributionEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ContributionRepository extends JpaRepository<ContributionEntity, Integer> {
    List<ContributionEntity> findContributionEntitiesByBackerBackerId(int backerId);

    List<ContributionEntity> findContributionEntitiesByBenefitBenefitId(int benefitId);
}
