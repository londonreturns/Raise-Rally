package com.techtitans.backend.repository;

import com.techtitans.backend.entity.BackerEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BackerRepository extends JpaRepository<BackerEntity, Integer> {
    // Custom query for finding backer from email
    @Query(value = "SELECT s FROM BackerEntity s WHERE email = :val")
    Optional<BackerEntity> fetchByEmail(@Param("val") String email);
}
