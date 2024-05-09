package com.techtitans.backend.dto.contribution;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ContributionDto {
    private int id;
    private int actualPaidPrice;
    private String pidx;
    private int benefitId;
    private int backerId;
}
