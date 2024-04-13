package com.techtitans.backend.dto.company;

import com.techtitans.backend.entity.ProductEntity;
import lombok.*;

import java.io.Serializable;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
// DTO representing the request for company entity
public class CompanyRequestDto implements Serializable {
    private int companyId;
    private String name;
    private String description;
    private String email;
    private boolean active;
    private boolean ticked;
    private String password;
    private List<ProductEntity> products;
}

