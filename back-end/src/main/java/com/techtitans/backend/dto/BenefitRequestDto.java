package com.techtitans.backend.dto;

import com.techtitans.backend.entity.PriceEntity;
import com.techtitans.backend.entity.ProductEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BenefitRequestDto implements Serializable {
    private int benefitId;
    private String benefitName;
    private String benefitDescription;
    private PriceEntity price;
    private ProductEntity product;
}
