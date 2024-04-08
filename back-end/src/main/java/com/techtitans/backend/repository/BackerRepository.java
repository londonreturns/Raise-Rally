package com.techtitans.backend.repository;

import com.techtitans.backend.entity.BackerEntity;
import org.springframework.data.jpa.repository.JpaRepository;

// Backer repository takes in all the methods of jpa repository
public interface BackerRepository extends JpaRepository<BackerEntity, Integer> {
}
