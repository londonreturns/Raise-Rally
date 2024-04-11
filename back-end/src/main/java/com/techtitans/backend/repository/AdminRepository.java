package com.techtitans.backend.repository;

import com.techtitans.backend.entity.AdminEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepository extends JpaRepository<AdminEntity,Integer> {
}
