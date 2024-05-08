package com.techtitans.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "benefit_table")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class BenefitEntity {
    @Id
    // Using database's autoincrement feature
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int benefitId;
    private String benefitName;
    private String benefitDescription;

    // JPA mapping
    @OneToOne
    @JoinColumn(name = "price_id")
    private PriceEntity price;

    // JPA mapping
    @ManyToOne
    @JoinColumn(name = "product_id")
    private ProductEntity product;

    @OneToMany(mappedBy = "benefit", cascade = CascadeType.ALL)
    private List<ContributionEntity> contributions;
}