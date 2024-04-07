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

// DTO representing the request for a company entity
public class CompanyRequestDto implements Serializable {
    private int companyId;
    private String name;
    private String description;
    private String email;
    private int active;
    private int ticked;
    private String password;
}
