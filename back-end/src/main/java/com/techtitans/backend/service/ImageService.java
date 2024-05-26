package com.techtitans.backend.service;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface ImageService {
    String uploadImages(int productId, MultipartFile[] imageFiles) throws IOException;
    byte[] downloadImage(String imageName) throws IOException;
}
