package com.example.proj_vans.proj_vans;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@Configuration
public class ImageServeConfigurations implements WebMvcConfigurer {
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {

        registry.addResourceHandler("/profile_passageiros/**")
                .addResourceLocations("file:profile_passageiros/");

        registry.addResourceHandler("/profile_motoristas/**")
                .addResourceLocations("file:profile_motoristas/");
    }
}