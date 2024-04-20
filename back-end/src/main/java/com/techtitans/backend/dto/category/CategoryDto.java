package com.techtitans.backend.dto.category;

import com.techtitans.backend.entity.ProductEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
// DTO representing the category entity
public class CategoryDto implements Serializable {
    private int categoryId;
    private String categoryName;
    private List<ProductEntity> products;
}
