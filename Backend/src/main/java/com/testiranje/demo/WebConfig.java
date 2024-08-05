package com.testiranje.demo;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    // Configures CORS settings for the application
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:4200") // Allows requests from http://localhost:4200
                .allowedMethods("GET", "POST", "PUT", "DELETE")  // Allows HTTP methods (GET, POST, PUT, DELETE)
                .allowedHeaders("*");
    }
}
