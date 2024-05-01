package com.grocerymart.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.grocerymart.dto.AddUserRequest;
import com.grocerymart.dto.UserLoginRequest;
import com.grocerymart.pojo.Address;
import com.grocerymart.pojo.User;
import com.grocerymart.repository.AddressRepository;
import com.grocerymart.repository.UserRepository;

@RestController
@RequestMapping("api/user")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
	
	@Autowired
	private UserRepository userDao;
	
	@Autowired
	private AddressRepository addressDao;
	
	@PostMapping("register")
	public ResponseEntity<?> registerUser(@RequestBody AddUserRequest userRequest) {
		System.out.println("recieved request for REGISTER USER");
		System.out.println(userRequest);
		
		Address address = new Address();
		address.setCity(userRequest.getCity());
		address.setPincode(userRequest.getPincode());
		address.setStreet(userRequest.getStreet());
		
		Address addAddress = addressDao.save(address);
		
		User user = new User();
		user.setAddress(addAddress);
		user.setEmailId(userRequest.getEmailId());
		user.setFirstName(userRequest.getFirstName());
		user.setLastName(userRequest.getLastName());
		user.setPhoneNo(userRequest.getPhoneNo());
		user.setPassword(userRequest.getPassword());
		user.setRole(userRequest.getRole());
		User addUser = userDao.save(user);
		
		System.out.println("response sent!!!");
		return ResponseEntity.ok(addUser);
	}
	
	@PostMapping("login")
	public ResponseEntity<?> loginUser(@RequestBody UserLoginRequest loginRequest) {
		System.out.println("recieved request for LOGIN USER");
		System.out.println(loginRequest);
		
		User user = new User();
		user = userDao.findByEmailIdAndPassword(loginRequest.getEmailId(), loginRequest.getPassword());
		System.out.println(user);
		System.out.println("response sent!!!");
		return ResponseEntity.ok(user);
	}
	
	@GetMapping("deliveryperson/all")
	public ResponseEntity<?> getAllDeliveryPersons() {
		System.out.println("recieved request for getting ALL Delivery Persons!!!");
		
		List<User> deliveryPersons = this.userDao.findByRole("Delivery");
		
		System.out.println("response sent!!!");
		return ResponseEntity.ok(deliveryPersons);
	}

	@GetMapping("admin/all")
	public ResponseEntity<?> getAllAdmin(){
		System.out.println("recieved request for getting all admin");

		List<User> admins = this.userDao.findByRole("Admin");

		System.out.println("response sent");
		return ResponseEntity.ok(admins);
	}

	@GetMapping("customer/all")
	public ResponseEntity<?> getAllCustomer(){
		System.out.println("received for getting all customers");

		List<User> customers = this.userDao.findByRole("Customer");
		System.out.println("repsonse sent");
		
		return ResponseEntity.ok(customers);
	}

	@GetMapping("supplier/all")
	public ResponseEntity<?> getAllSupplier(){
		System.out.println("received for getting all suppliers");

		List<User> suppliers = this.userDao.findByRole("Supplier");
		System.out.println("repsonse sent");
		
		return ResponseEntity.ok(suppliers);
	}

	

}
