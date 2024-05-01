package com.grocerymart.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.grocerymart.pojo.Address;

@Repository
public interface AddressRepository extends JpaRepository<Address, Integer> {

}
