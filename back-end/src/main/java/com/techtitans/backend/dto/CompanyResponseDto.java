package com.techtitans.backend.dto;

import lombok.*;

import java.io.Serializable;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

// We use company dto class to transfer the data between client and server
public class CompanyResponseDto implements Serializable {
    private int companyId;
    private String name;
    private String email;
    private int active;
    private int ticked;
}
