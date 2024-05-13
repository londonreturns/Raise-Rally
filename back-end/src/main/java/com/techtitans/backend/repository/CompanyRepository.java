package com.techtitans.backend.repository;

import com.techtitans.backend.entity.CompanyEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.Optional;
import org.springframework.stereotype.Repository;

@Repository
public interface CompanyRepository extends JpaRepository<CompanyEntity, Integer> {

    //Custom query for finding company from email
    @Query(value = "SELECT s FROM CompanyEntity s WHERE email = :val")
    Optional<CompanyEntity> fetchByEmail(@Param("val") String companyEmail);
}
