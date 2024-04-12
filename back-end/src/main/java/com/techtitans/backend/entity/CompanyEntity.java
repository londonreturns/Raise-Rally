package com.techtitans.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "company_table")

public class CompanyEntity {
    @Id
    // Use database autoincrement feature to automate the increment of primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int companyId;
    private String name;
    private String description;
    private String email;
    private String password;
    private boolean active;
    private boolean ticked;

    // JPA mapping
    @OneToMany(mappedBy = "company", cascade = CascadeType.ALL)
    private List<ProductEntity> products = new ArrayList<>();
}
