package com.techtitans.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "price_table")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PriceEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int priceId;
    private int amount;

    @OneToOne(mappedBy = "price", cascade = CascadeType.ALL)
    @JoinColumn(name = "price_id")
    private BenefitEntity benefit;
}