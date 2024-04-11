package com.techtitans.backend.controller;

import com.techtitans.backend.constants.PathConstants;
import com.techtitans.backend.dto.PriceResponseDto;
import com.techtitans.backend.service.PriceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(PathConstants.PRICE)
public class PriceController {
    @Autowired
    PriceService priceService;

    @GetMapping(PathConstants.GET_BY_ID_PATH)
    public ResponseEntity<PriceResponseDto> getPrice(
            @PathVariable("id") int priceId
    ) {
        PriceResponseDto price = priceService.getPrice(priceId);
        return new ResponseEntity<>(price, HttpStatus.OK);
    }
}
