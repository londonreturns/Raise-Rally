package com.techtitans.backend.repository;

import com.techtitans.backend.entity.AdminEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface AdminRepository extends JpaRepository<AdminEntity,Integer> {
    // Custom query for finding admin from email
    @Query(value = "SELECT s FROM AdminEntity s WHERE email = :val")
    Optional<AdminEntity> fetchByEmail(@Param("val") String email);
}
