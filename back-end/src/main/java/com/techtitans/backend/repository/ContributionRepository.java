package com.techtitans.backend.repository;

import com.techtitans.backend.entity.ContributionEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ContributionRepository extends JpaRepository<ContributionEntity, Integer> {
    List<ContributionEntity> findContributionEntitiesByBackerBackerId(int backerId);

    List<ContributionEntity> findContributionEntitiesByBenefitBenefitId(int benefitId);

    // Query to find the number of backers by product
    @Query(value = "SELECT COUNT(c.backer_id) AS num_backers " +
            "FROM contribution_table c " +
            "INNER JOIN backer_table b ON c.backer_id = b.backer_id " +
            "INNER JOIN benefit_table bt ON c.benefit_id = bt.benefit_id " +
            "WHERE bt.product_id = ?1", nativeQuery = true)
    int countBackersByProductId(int product_id);
}
