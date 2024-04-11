package com.techtitans.backend.dto;

import com.techtitans.backend.entity.ProductEntity;
import lombok.*;

import java.io.Serializable;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CompanyResponseDto implements Serializable {
    private int companyId;
    private String name;
    private String description;
    private String email;
    private boolean active;
    private boolean ticked;
    private List<ProductEntity> products;
}
