package com.techtitans.backend.repository;

import com.techtitans.backend.entity.ContributionEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContributionRepository extends JpaRepository<ContributionEntity, Integer> {
}
