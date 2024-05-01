import MyCarousel from "./MyCarousel";
import GetAllCategories from "../productComponent/GetAllCategories";
import ProductCard from "../productComponent/ProductCard";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Home Page Component
const HomePage = () => {
  // State to hold the list of products
  const [products, setProducts] = useState([]);

  // Get the categoryId parameter from the URL
  const { categoryId } = useParams();

  useEffect(() => {
    // Function to retrieve all products
    const getAllProducts = async () => {
      const allProducts = await retrieveAllProducts();
      if (allProducts) {
        setProducts(allProducts);
      }
    };

    // Function to retrieve products by category
    const getProductsByCategory = async () => {
      const allProducts = await retrieveProductsByCategory();
      if (allProducts) {
        setProducts(allProducts);
      }
    };

    // Determine whether to fetch all products or products by category based on categoryId
    if (categoryId == null) {
      console.log("Category Id is null");
      getAllProducts();
    } else {
      console.log("Category Id is NOT null");
      getProductsByCategory();
    }
  }, [categoryId]);/// Run the effect whenever categoryId changes

  // Function to retrieve all products from the API
  const retrieveAllProducts = async () => {
    const response = await axios.get("http://localhost:8080/api/product/all");

    return response.data;
  };

  // Function to retrieve products by category from the API
  const retrieveProductsByCategory = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/product/category?categoryId=" + categoryId
    );

    return response.data;
  };

  return (
    <div className="container-fluid mb-2">
      {/* Render the MyCarousel component */}
      <MyCarousel />
      <div className="mt-2 mb-5">
        <div className="row">
          <div className="col-md-2">
            {/* Render the GetAllCategories component */}
            <GetAllCategories />
          </div>
          <div className="col-md-10">
            <div className="row row-cols-1 row-cols-md-4 g-4">
              {/* Map over the products array and render ProductCard components */}
              {products.map((product) => {
                return <ProductCard item={product} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
