package com.techtitans.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "contribution_table")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ContributionEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private int actualPaidPrice;

    private String pidx;

    // JPA mapping
    @ManyToOne
    @JoinColumn(name = "benefitId")
    private BenefitEntity benefit;

    // JPA mapping
    @ManyToOne
    @JoinColumn(name = "backerId")
    private BackerEntity backer;
}
