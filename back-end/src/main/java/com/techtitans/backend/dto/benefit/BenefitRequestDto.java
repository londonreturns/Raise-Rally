package com.techtitans.backend.dto.benefit;

import com.techtitans.backend.entity.ContributionEntity;
import com.techtitans.backend.entity.PriceEntity;
import com.techtitans.backend.entity.ProductEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
// DTO representing the request for benefit entity
public class BenefitRequestDto implements Serializable {
    private int benefitId;
    private String benefitName;
    private String benefitDescription;
    private PriceEntity price;
    private ProductEntity product;
    private List<ContributionEntity> contributions;
}
