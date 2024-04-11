package com.techtitans.backend.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "product_table")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProductEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int productId;
    private String productName;
    private String productDescription;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    private List<BenefitEntity> benefits = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "categoryId")
    private CategoryEntity category;

    @ManyToOne
    @JoinColumn(name = "companyId")
    private CompanyEntity company;
}
