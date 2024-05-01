import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminHeader = () => {
  let navigate = useNavigate();

  const user = JSON.parse(sessionStorage.getItem("active-admin"));
  console.log(user);

  const adminLogout = () => {
    toast.success("logged out!!!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    sessionStorage.removeItem("active-admin");
    navigate("/home");
    window.location.reload(true);
  };

  return (
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
      <li class="nav-item">
        <Link to="/addcategory" class="nav-link active" aria-current="page">
          <h5 className="text-color"> Add Category</h5>
        </Link>
      </li>



      <li class="nav-item">
        <Link
          to="/user/admin/allorder"
          class="nav-link active"
          aria-current="page"
        >
          <h5 className="text-color">All Orders</h5>
        </Link>
      </li>

      <li class="nav-item">
        <Link
          to="/user/admin/assigndelivery"
          class="nav-link active"
          aria-current="page"
        >
          <h5 className="text-color">Assign Delivery</h5>
        </Link>
      </li>

      <li class="nav-item">
        {sessionStorage.getItem("username")}
      </li>

      <li class="nav-item">
        <Link to="#" class="nav-link active" aria-current="page">
          <h5 className="text-color" style={{ color: 'red' }}>Welcome, {user.firstName}</h5>
        </Link>
      </li>

      <li class="nav-item">
        <Link
          to=""
          class="nav-link active"
          aria-current="page"
          onClick={adminLogout}
        >
          <h5 className="text-color">Logout</h5>
        </Link>
        <ToastContainer />
      </li>
    </ul>
  );
};

export default AdminHeader;
