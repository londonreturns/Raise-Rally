package com.techtitans.backend.dto;

import com.techtitans.backend.entity.BenefitEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PriceRequestDto implements Serializable {
    private int id;
    private int amount;
    private BenefitEntity benefit;

}
