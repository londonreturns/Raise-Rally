package com.techtitans.backend.controller;

import com.techtitans.backend.constants.PathConstants;
import com.techtitans.backend.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

// Request mapping for the controller
@RestController
@RequestMapping(PathConstants.IMAGE)
public class ImageController {
    // Service Dependency Injection
    @Autowired
    private ImageService imageService;

    // Add images by id
    @PostMapping("/{id}")
    public ResponseEntity<?> addImagesById(
            @RequestParam("file") MultipartFile[] imageFiles,
            @PathVariable("id") int productId) {
        try{
            String image = imageService.uploadImages(productId, imageFiles);
            return new ResponseEntity<>(image, HttpStatus.OK);
        } catch (IOException e){
            return new ResponseEntity<>("Please try again", HttpStatus.INTERNAL_SERVER_ERROR);
        } catch (Exception e){
            System.out.println(e.getMessage());;
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Get images by name
    @GetMapping("/{fileName}")
    public ResponseEntity<?> getImageByName(
            @PathVariable("fileName") String imageName
    ) {
        try {
            byte[] imageData = imageService.downloadImage(imageName);
            return ResponseEntity.status(HttpStatus.OK
                    ).contentType(MediaType.valueOf("image/png"))
                    .body(imageData);
        } catch (IOException e) {
            return new ResponseEntity<>("Image not found", HttpStatus.INTERNAL_SERVER_ERROR);
        } catch (Exception e){
            System.out.println(e.getMessage());
            return new ResponseEntity<>("Something went wrong", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
