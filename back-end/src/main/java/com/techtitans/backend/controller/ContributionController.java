package com.techtitans.backend.controller;

import com.techtitans.backend.constants.PathConstants;
import com.techtitans.backend.dto.contribution.ContributionDto;
import com.techtitans.backend.service.ContributionService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor

// Request mapping for the controller
@RequestMapping(PathConstants.CONTRIBUTION)
public class ContributionController {
    // Service Dependency Injection
    @Autowired
    private ContributionService contributionService;

    // Build add contribution API
    @PostMapping
    public ResponseEntity<ContributionDto> addContribution(
            @RequestBody ContributionDto contributionDto
    ) {
        ContributionDto savedContributionDto = contributionService.addContribution(contributionDto);
        return new ResponseEntity<>(savedContributionDto, HttpStatus.OK);
    }

    // Get contribution from contribution id
    @GetMapping(PathConstants.GET_BY_ID_PATH)
    public ResponseEntity<ContributionDto> getAllContributions(
            @PathVariable("id") int contributionId
    ) {
        ContributionDto contribution = contributionService.getContribution(contributionId);
        return new ResponseEntity<>(contribution, HttpStatus.OK);
    }

    // Get contributions from backer id
    @GetMapping("/backer" + PathConstants.GET_BY_ID_PATH)
    public ResponseEntity<List<ContributionDto>> getContributionByBackerId(
            @PathVariable("id") int backerId
    ){
        List<ContributionDto> contributionsByBacker = contributionService.getContributionsByBacker(backerId);
        return new ResponseEntity<>(contributionsByBacker, HttpStatus.OK);
    }

    // Get contributions from product id
    @GetMapping("/product" + PathConstants.GET_BY_ID_PATH)
    public ResponseEntity<List<List<ContributionDto>>> getContributionByProductId(
            @PathVariable("id") int productId
    ){
        List<List<ContributionDto>> contributions = contributionService.getContributionsByProduct(productId);
        return new ResponseEntity<>(contributions, HttpStatus.OK);
    }
}
