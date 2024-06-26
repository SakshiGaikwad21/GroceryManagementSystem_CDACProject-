package com.grocerymart.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.grocerymart.pojo.Orders;
import com.grocerymart.pojo.User;

@Repository
public interface OrderRepository extends JpaRepository<Orders, Integer> {
	
	List<Orders> findByUser_id(int userId);
	List<Orders> findByOrderId(String orderId);
	List<Orders> findByUser_idAndProduct_id(int userId, int productId);
	List<Orders> findByUser(User user);
	List<Orders> findByDeliveryPersonId(int deliveryPersonId);
	 
}
