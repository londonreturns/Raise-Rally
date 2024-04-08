package com.techtitans.backend.dto;

import lombok.*;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor

// DTO to update the company entity
public class CompanyUpdateDto implements Serializable {
    private int companyId;
    private String name;
    private String description;
    private String email;
    private boolean active;
    private boolean ticked;
    private String oldPassword;
    private String newPassword;
}

