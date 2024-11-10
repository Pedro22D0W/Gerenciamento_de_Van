package com.example.proj_vans.proj_vans;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConfigurationProperties(prefix = "file") //carrega todas as prorpiedades com file como prefixo no aplication properties

public class FileStorageProperties {
    private String uploadDir;

    //Geters e Setters

    public String getUploadDir(){
        return uploadDir;
    }

    public void setUploadDir(String uploadDir){
        this.uploadDir = uploadDir;
    }
}



