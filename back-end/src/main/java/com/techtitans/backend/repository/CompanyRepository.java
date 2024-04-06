package com.techtitans.backend.repository;

import com.techtitans.backend.entity.CompanyEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompanyRepository extends JpaRepository<CompanyEntity, Integer> {
}


