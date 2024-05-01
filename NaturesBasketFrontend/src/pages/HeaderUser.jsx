import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HeaderUser = () => {
  let navigate = useNavigate();

  const user = JSON.parse(sessionStorage.getItem("active-user"));
  console.log(user);

  const userLogout = () => {
    toast.success("logged out!!!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    sessionStorage.removeItem("active-user");
    navigate("/home");
    window.location.reload(true);
  };

  return (
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
      <li class="nav-item">
        <Link to="/user/mycart" class="nav-link active" aria-current="page">
          <h5 className="text-color">My Cart</h5>
        </Link>
      </li>

      <li class="nav-item">
        <Link to="/user/myorder" class="nav-link active" aria-current="page">
          <h5 className="text-color">My Order</h5>
        </Link>
      </li>

      <li class="nav-item">
        <Link to="#" class="nav-link active" aria-current="page">
          <h5 className="text-color" style={{ color: 'red' }}>Welcome,{user.firstName}</h5>
        </Link>
      </li>

      <li class="nav-item">
        <Link
          to=""
          class="nav-link active"
          aria-current="page"
          onClick={userLogout}
        >
          <h5 className="text-color">Logout</h5>
        </Link>
        <ToastContainer />
      </li>
    </ul>
  );
};

export default HeaderUser;
