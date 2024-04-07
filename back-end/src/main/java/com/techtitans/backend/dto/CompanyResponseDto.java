package com.techtitans.backend.dto;

import lombok.*;

import java.io.Serializable;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

// DTO representing the response for a company entity
public class CompanyResponseDto implements Serializable {
    private int companyId;
    private String name;
    private String description;
    private String email;
    private int active;
    private int ticked;
}
