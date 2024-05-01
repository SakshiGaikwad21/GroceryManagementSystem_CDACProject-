package com.grocerymart.service;

import org.springframework.web.multipart.MultipartFile;

import com.grocerymart.pojo.Product;

public interface ProductService {
	
	void addProduct(Product product, MultipartFile productImmage);

}
