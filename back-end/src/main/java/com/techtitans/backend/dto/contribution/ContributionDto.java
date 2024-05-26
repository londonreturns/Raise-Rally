package com.techtitans.backend.dto.contribution;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ContributionDto {
    private int id;
    private int actualPaidPrice;
    private String paymentId;
    private LocalDate paymentDate;
    private int benefitId;
    private int backerId;
}