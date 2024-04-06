package com.techtitans.backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "company")


public class CompanyEntity {
    @Id
    // Use database autoincrement feature to automate the increment of primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "company_id")
    private int companyId;

    // Specify columns
    @Column(name = "name")
    private String name;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "active")
    private int active;

    @Column(name = "ticked")
    private int ticked;

    public CompanyEntity(int companyId, String name, String email, int active, int ticked,String password) {
        this.setEmail(email);
        this.setCompanyId(companyId);
        this.setName(name);
        this.setActive(active);
        this.setTicked(ticked);
        this.setPassword(password);
    }
}
