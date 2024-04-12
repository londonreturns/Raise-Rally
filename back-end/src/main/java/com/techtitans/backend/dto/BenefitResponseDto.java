package com.techtitans.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
// DTO representing the response for benefit entity
public class BenefitResponseDto implements Serializable {
    private int benefitId;
    private String benefitName;
    private String benefitDescription;
    private int priceId;
    private int productId;
}