package com.techtitans.backend.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PaymentEntity {
    private int actualPaidPrice;
    private int backerId;
    private int benefitId;
}
