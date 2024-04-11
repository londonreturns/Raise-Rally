package com.techtitans.backend.dto;

import com.techtitans.backend.entity.BenefitEntity;
import com.techtitans.backend.entity.CategoryEntity;
import com.techtitans.backend.entity.CompanyEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProductRequestDto implements Serializable {
    private int productId;
    private String productName;
    private String productDescription;
    List<BenefitEntity> benefits;
    private CategoryEntity category;
    private CompanyEntity company;
}
