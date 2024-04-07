package com.techtitans.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

// DTO to update the company entity
public class CompanyUpdateDto implements Serializable {
    private int companyId;
    private String name;
    private String description;
    private String email;
    private int active;
    private int ticked;
    private String oldPassword;
    private String newPassword;
}

