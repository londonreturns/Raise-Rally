package com.techtitans.backend.dto;

import com.techtitans.backend.entity.ProductEntity;
import lombok.*;

import java.io.Serializable;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
// DTO representing the response for company entity
public class CompanyResponseDto implements Serializable {
    private int companyId;
    private String name;
    private String description;
    private String email;
    private boolean active;
    private boolean ticked;
    private List<ProductResponseDto> products;
}
