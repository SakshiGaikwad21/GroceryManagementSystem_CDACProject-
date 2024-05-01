import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";


// AddCategoryForm component
const AddCategoryForm = () => {
  const [title, setTitle] = useState("");// State for storing category title
  const [description, setDescription] = useState("");// State for storing category description
  let navigate = useNavigate();//Get the navigation function from React Router

  // Function to save the category to the server
  const saveCategory = () => {
    let data = { title, description };// Create a data object with title and description

    //fetch the api to add category
    fetch("http://localhost:8080/api/category/add", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),// Convert data object to JSON and send in the request body
    }).then((result) => {
      console.warn("result", result);
      result.json().then((res) => {
        console.log("response", res);
      });
      // Navigate to the specified route and reload the page
      navigate("/user/admin");
      window.location.reload(true);

      // Show a success toast notification
      toast.success("category added  Successfully!!!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });
  };

  return (
    <div>
      <div class="mt-2 d-flex aligns-items-center justify-content-center">
        <div
          class="card form-card border-color custom-bg"
          style={{ width: "25rem" }}
        >
          <div className="card-header bg-color text-center custom-bg-text">
            <h5 class="card-title">Add Category</h5>
          </div>
          <div class="card-body text-color">
            <form>
              <div class="mb-3">
                <label for="title" class="form-label">
                  <b>Category Title</b>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  placeholder="enter title.."
                  onChange={(e) => {
                    setTitle(e.target.value);// Update title state on input change
                  }}
                  value={title} // Bind title state to input value
                />
              </div>
              <div class="mb-3">
                <label for="description" class="form-label">
                  <b>Category Description</b>
                </label>
                <textarea
                  class="form-control"
                  id="description"
                  rows="3"
                  placeholder="enter description.."
                  onChange={(e) => {
                    setDescription(e.target.value);// Update description state on input change
                  }}
                  value={description}// Bind description state to textarea value
                />
              </div>

              <button
                type="submit"
                onClick={saveCategory}// Trigger saveCategory function on button click
                class="btn bg-color custom-bg-text"
              >
                Add Category
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCategoryForm;
