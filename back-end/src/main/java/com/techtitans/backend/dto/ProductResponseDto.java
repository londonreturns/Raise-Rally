package com.techtitans.backend.dto;

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
public class ProductResponseDto implements Serializable {
    private int productId;
    private String productName;
    private String productDescription;
    List<Integer> benefitIds;
    private int categoryId;
    private int companyId;
}