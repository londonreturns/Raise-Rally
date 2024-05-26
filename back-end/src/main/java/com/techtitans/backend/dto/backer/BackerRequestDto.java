package com.techtitans.backend.dto.backer;

import com.techtitans.backend.entity.ContributionEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
// DTO representing the request for backer entity
public class BackerRequestDto implements Serializable {
    private int backer_id;
    private String name;
    private String email;
    private String password;
    private List<ContributionEntity> contributions;
}
