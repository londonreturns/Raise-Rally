package com.techtitans.backend.dto.company;

import com.techtitans.backend.entity.ProductEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CompanyUpdateRequestDto {
    private int companyId;
    private String name;
    private String description;
    private String oldPassword;
    private String newPassword;
}
