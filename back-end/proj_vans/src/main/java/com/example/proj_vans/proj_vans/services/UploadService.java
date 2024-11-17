package com.example.proj_vans.proj_vans.services;

import com.example.proj_vans.proj_vans.FileStorageProperties;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
@Service
public class UploadService {
    private final Path fileStorageLocation;

    public UploadService(FileStorageProperties fileStorageProperties){
        this.fileStorageLocation = Paths.get(fileStorageProperties.getUploadDir())
                .toAbsolutePath().normalize();
    }
    public String uploadFile(MultipartFile file, Path newFileStorageLocation,String downloadUri ){
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());

        try {
            Path targetLocation = newFileStorageLocation.resolve(fileName);
            file.transferTo(targetLocation);

            String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
                    .path(downloadUri)
                    .path(fileName)
                    .toUriString();
            return  fileDownloadUri;
        } catch (IOException e) {
            return "fail";
        }
    }
}
