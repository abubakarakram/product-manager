package com.productmanagement.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.productmanagement.model.Product;
import com.productmanagement.services.ProductService;
@CrossOrigin(origins="*")
@RestController
public class ProductController {

	@Autowired
	ProductService productService;

	@PostMapping("/addproduct")
	ResponseEntity<?> addproduct(@RequestBody Product product) {
		productService.addproduct(product);
		return new ResponseEntity("Product Added",HttpStatus.OK);
	}

	@GetMapping("/getallproduct")
	public ResponseEntity<List<Product>> getStudentDetail() {
		List<Product> products = productService.getallproduct();
		return new ResponseEntity<List<Product>>(products, HttpStatus.OK);
	}

	@PostMapping("/editproduct")
	ResponseEntity<?> editproduct(@RequestBody Product product) {
		productService.editproduct(product);
		return new ResponseEntity("Product Edited",HttpStatus.OK);
	}

	@DeleteMapping("/deleteproduct/{productId}")
	public ResponseEntity<?> deleteproduct(@PathVariable("productId") int productid) {
		productService.deleteproduct(productid);
		return new ResponseEntity("Product Deleted",HttpStatus.OK);

	}

}
