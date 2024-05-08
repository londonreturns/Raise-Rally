package com.techtitans.backend.dto.backer;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.List;

@Data
@Setter
@AllArgsConstructor
@NoArgsConstructor
// DTO representing the response for backer entity
public class BackerResponseDto implements Serializable {
    private int backer_id;
    private String name;
    private String email;
    private List<Integer> contributionIds;

    public BackerResponseDto(int backerId, String name, String email) {
        this.backer_id = backerId;
        this.name = name;
        this.email = email;
    }
}
