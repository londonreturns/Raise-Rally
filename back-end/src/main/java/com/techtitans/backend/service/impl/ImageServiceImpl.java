package com.techtitans.backend.service.impl;

import com.techtitans.backend.entity.ImageEntity;
import com.techtitans.backend.entity.ProductEntity;
import com.techtitans.backend.repository.ImageRepository;
import com.techtitans.backend.repository.ProductRepository;
import com.techtitans.backend.service.ImageService;
import com.techtitans.backend.utils.ImageUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Objects;

@Service
public class ImageServiceImpl implements ImageService {

    @Autowired
    private ImageRepository imageRepository;

    @Autowired
    private ProductRepository productRepository;

    // Method to upload images for a given product ID
    @Override
    public String uploadImages(int productId, MultipartFile[] imageFiles) throws IOException {
        int numberOfImages = imageFiles.length;

        // Fetch the product entity from the repository
        ProductEntity product = productRepository.findById(productId).orElseThrow(
                () -> new RuntimeException("Product with id " + productId + " not found")
        );

        // Check if each image file is within size limits
        for (MultipartFile imageFile : imageFiles) {
            checkIfFileTooLarge(imageFile);
        }

        // Process each image file
        for (int i = 0; i < numberOfImages; i++) {
            // Extract file extension from content type
            String extension = "." + Objects.requireNonNull(imageFiles[i].getContentType()).split("/")[1];
            String count = String.valueOf(i + 1);
            String newName = productId + "_" + count + extension;
            // Save image entity to the repository
            imageRepository.save(
                    ImageEntity.builder()
                            .name(newName)
                            .type(imageFiles[i].getContentType())
                            .imageData(ImageUtils.compressImage(imageFiles[i].getBytes()))
                            .product(product)
                            .build()
            );
            // Print the new image name for debugging purposes
            System.out.println(newName);
        }
        // Return success message after uploading images
        return "File uploaded!";
    }

    // Method to download an image by name
    @Override
    public byte[] downloadImage(String imageName) {
        // Find image entity by name from the repository
        ImageEntity imageData = imageRepository.findByName(imageName);

        // If image data exists, decompress and return it
        if (imageData != null) {
            return ImageUtils.decompressImage(imageData.getImageData());
        } else {
            // Throw exception if image not found
            throw new RuntimeException("File not found!");
        }
    }

    // Method to check if a file is too large
    public void checkIfFileTooLarge(MultipartFile file) throws IOException {
        
        long maxSizeBytes = 5 * 1024 * 1024; // 5 MB maximum file size
        long sizeBytes = file.getSize();

        if (sizeBytes > maxSizeBytes) {
            // Throw exception if file size exceeds the limit
            throw new IOException("File size too large.");
        }
    }
}
