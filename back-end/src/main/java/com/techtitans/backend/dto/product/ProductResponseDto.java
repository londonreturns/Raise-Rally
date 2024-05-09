package com.techtitans.backend.dto.product;

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
// DTO representing the response for product entity
public class ProductResponseDto implements Serializable {
    private int productId;
    private String productName;
    private String productDescription;
    private int productGoal;
    private boolean active;
    private int currentAmount;
    private LocalDate startDate;
    private LocalDate endDate;
    List<Integer> benefitIds;
    private int categoryId;
    private int companyId;
}