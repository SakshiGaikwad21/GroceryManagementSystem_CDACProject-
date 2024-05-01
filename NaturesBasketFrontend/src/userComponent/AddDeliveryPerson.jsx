import React, { useState } from "react";

// AddDeliveryPerson component
const AddDeliveryPerson = () => {
  // State to hold delivery person information
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    password: "",
    phoneNo: "",
    street: "",
    city: "",
    pincode: "",
  });

  const [errors, setErrors] = useState({}); // State to store validation errors

  // Function to handle user input changes
  const handleUserInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};

    // Check if fields are not blank
    if (!user.firstName.trim()) {
      newErrors.firstName = "First Name is required";
    }
    if (!user.lastName.trim()) {
      newErrors.lastName = "Last Name is required";
    }
    if (!user.emailId.trim()) {
      newErrors.emailId = "Email Id is required";
    }
    if (!user.password.trim()) {
      newErrors.password = "Password is required";
    }
    if (!user.phoneNo.trim()) {
      newErrors.phoneNo = "Mobile No is required";
    }
    if (!user.street.trim()) {
      newErrors.street = "Street is required";
    }
    if (!user.city.trim()) {
      newErrors.city = "City is required";
    }
    if (!user.pincode.trim()) {
      newErrors.pincode = "Pincode is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Function to save the delivery person
  const saveUser = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Proceed with form submission
      fetch("http://localhost:8080/api/user/deliveryperson/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }).then((result) => {
        console.warn("result", result);
        result.json().then((res) => {
          console.log("response", res);
        });
      });
    }
  };

  return (
    <div>
      {/* Form validation errors */}
      {errors.firstName && <p>{errors.firstName}</p>}
      {errors.lastName && <p>{errors.lastName}</p>}
      {errors.emailId && <p>{errors.emailId}</p>}
      {errors.password && <p>{errors.password}</p>}
      {errors.phoneNo && <p>{errors.phoneNo}</p>}
      {errors.street && <p>{errors.street}</p>}
      {errors.city && <p>{errors.city}</p>}
      {errors.pincode && <p>{errors.pincode}</p>}
      <div class="mt-2 d-flex aligns-items-center justify-content-center ms-2 me-2 mb-2">
        <div class="card form-card border-color" style={{ width: "25rem" }}>
          <div className="card-header bg-color">
            <h5 class="card-title">Add Delivery Person</h5>
          </div>
          <div class="card-body">
            {/* Input fields for delivery person details */}
            <form>
              <div class="mb-3">
                <label for="title" class="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="firstName"
                  name="firstName"
                  onChange={handleUserInput}
                  value={user.firstName}
                />
              </div>
              <div class="mb-3">
                <label for="description" class="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="lastName"
                  name="lastName"
                  onChange={handleUserInput}
                  value={user.lastName}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email Id</label>
                <input
                  type="email"
                  class="form-control"
                  id="emailId"
                  name="emailId"
                  onChange={handleUserInput}
                  value={user.emailId}
                />
              </div>

              <div class="mb-3 mt-1">
                <label for="quantity" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  name="password"
                  onChange={handleUserInput}
                  value={user.password}
                />
              </div>

              <div class="mb-3">
                <label for="price" class="form-label">
                  Mobile No
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="phoneNo"
                  name="phoneNo"
                  onChange={handleUserInput}
                  value={user.phoneNo}
                />
              </div>

              <div class="mb-3">
                <label for="description" class="form-label">
                  Street
                </label>
                <textarea
                  class="form-control"
                  id="street"
                  name="street"
                  rows="3"
                  onChange={handleUserInput}
                  value={user.street}
                />
              </div>

              <div class="mb-3">
                <label for="price" class="form-label">
                  City
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="city"
                  name="city"
                  onChange={handleUserInput}
                  value={user.city}
                />
              </div>

              <div class="mb-3">
                <label for="pincode" class="form-label">
                  Pincode
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="pincode"
                  name="pincode"
                  onChange={handleUserInput}
                  value={user.pincode}
                />
              </div>
              {/* Register button */}
              <button
                type="submit"
                class="btn custom-bg text-color"
                onClick={saveUser}
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDeliveryPerson;
