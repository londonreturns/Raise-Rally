package com.techtitans.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "benefit_table")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class BenefitEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int benefitId;
    private String benefitName;
    private String benefitDescription;

    @OneToOne
    @JoinColumn(name = "price_id")
    private PriceEntity price;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private ProductEntity product;
}