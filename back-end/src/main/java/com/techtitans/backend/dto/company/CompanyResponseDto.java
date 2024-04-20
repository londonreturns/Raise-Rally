package com.techtitans.backend.dto.company;

import com.techtitans.backend.dto.product.ProductResponseDto;
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

    public CompanyResponseDto(int companyId, String name, String description, String email, boolean active, boolean ticked) {
        this.companyId = companyId;
        this.name = name;
        this.description = description;
        this.email = email;
        this.active = active;
        this.ticked = ticked;
    }
}
