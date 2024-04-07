package com.techtitans.backend.dto;

import lombok.*;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor

// DTO representing the request for a company entity
public class CompanyRequestDto implements Serializable {
    private int companyId;
    private String name;
    private String description;
    private String email;
    private boolean active;
    private boolean ticked;
    private String password;
}
