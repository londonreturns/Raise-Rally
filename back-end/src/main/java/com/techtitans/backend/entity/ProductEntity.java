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
    // Using database's autoincrement feature
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int productId;
    private String productName;
    private String productDescription;

    // JPA mapping
    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    private List<BenefitEntity> benefits = new ArrayList<>();

    // JPA mapping
    @ManyToOne
    @JoinColumn(name = "categoryId")
    private CategoryEntity category;

    // JPA mapping
    @ManyToOne
    @JoinColumn(name = "companyId")
    private CompanyEntity company;
}
