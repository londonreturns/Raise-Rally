package com.techtitans.backend.repository;

import com.techtitans.backend.entity.ImageEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImageRepository extends JpaRepository<ImageEntity, Integer> {
    ImageEntity findByName(String imageName);
}
