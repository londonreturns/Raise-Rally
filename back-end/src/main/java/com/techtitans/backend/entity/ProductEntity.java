package com.techtitans.backend.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
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
    private int productGoal;
    private boolean active;
    private int currentAmount;
    private LocalDate startDate;
    private LocalDate endDate;

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

    // JPA mapping
    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    private List<ImageEntity> images = new ArrayList<>();

    public ProductEntity(int productId, String productName, String productDescription, int productGoal, boolean active, int currentAmount, LocalDate startDate, LocalDate endDate, List<BenefitEntity> benefits, CategoryEntity category, CompanyEntity company) {
        this.productId = productId;
        this.productName = productName;
        this.productDescription = productDescription;
        this.productGoal = productGoal;
        this.currentAmount = currentAmount;
        this.startDate = startDate;
        this.endDate = endDate;
        this.active = active;
        this.benefits = benefits;
        this.category = category;
        this.company = company;
    }
}
