package com.grocerymart.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.grocerymart.pojo.Cart;

@Repository
public interface CartRepository extends JpaRepository<Cart, Integer> {	
	
	List<Cart> findByUser_id(int userId);

}
