package com.techtitans.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Data
@Setter
@AllArgsConstructor
@NoArgsConstructor
// DTO representing the response for a backer entity
public class BackerRequestDto implements Serializable {
    private int backer_id;
    private String name;
    private String email;
    private String password;
}
