package com.ust.EComApplication.service;

import com.ust.EComApplication.model.Product;
import com.ust.EComApplication.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public List<Product> filterProducts(String category, String brand, Double minPrice, Double maxPrice) {
        if (category != null) {
            return productRepository.findByCategory(category);
        } else if (brand != null) {
            return productRepository.findByBrand(brand);
        } else if (minPrice != null && maxPrice != null) {
            return productRepository.findByPriceBetween(minPrice, maxPrice);
        }
        return getAllProducts();
    }

    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }
}

