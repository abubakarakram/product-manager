package com.productmanagement.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.productmanagement.model.Product;
import com.productmanagement.repositories.ProductRepository;

@Service
public class ProductService {
	
	
	@Autowired
	ProductRepository productRepository;
	
	public void addproduct(Product product)
	{
		productRepository.save(product);
	}
	
	public void deleteproduct(int productId)
	
	{
		productRepository.deleteById(productId);
	}
	public void editproduct(Product product) {
		productRepository.save( product);
	}
	public 	List<Product> getallproduct()
	{
		return productRepository.findAll();
	}

}
