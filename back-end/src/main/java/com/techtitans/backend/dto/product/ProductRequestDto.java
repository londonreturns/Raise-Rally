package com.techtitans.backend.dto.product;

import com.techtitans.backend.entity.BenefitEntity;
import com.techtitans.backend.entity.CategoryEntity;
import com.techtitans.backend.entity.CompanyEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
// DTO representing the request for product entity
public class ProductRequestDto implements Serializable {
    private int productId;
    private String productName;
    private String productDescription;
    private int productGoal;
    private boolean active;
    private int currentAmount;
    private LocalDate startDate;
    private LocalDate endDate;
    List<BenefitEntity> benefits;
    private CategoryEntity category;
    private CompanyEntity company;
}
