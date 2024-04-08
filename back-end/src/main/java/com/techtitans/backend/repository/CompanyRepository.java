package com.techtitans.backend.repository;

import com.techtitans.backend.entity.CompanyEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RestController;

@Repository
public interface CompanyRepository extends JpaRepository<CompanyEntity, Integer> {
}


