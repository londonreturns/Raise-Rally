package com.techtitans.backend.repository;

import com.techtitans.backend.entity.PriceEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PriceRepository extends JpaRepository<PriceEntity, Integer> {
}
