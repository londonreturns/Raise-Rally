package com.techtitans.backend.dto.price;

import com.techtitans.backend.entity.BenefitEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
// DTO representing the request for price entity
public class PriceRequestDto implements Serializable {
    private int id;
    private int amount;
    private BenefitEntity benefit;

}
