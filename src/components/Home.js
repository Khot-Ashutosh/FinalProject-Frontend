import { Link } from "react-router-dom";
import img1 from "./Bus1.jpg";
//import Footer1 from "./Footer1";
import Header from "./Header";
//import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Header />
      <div
        style={{
          background: `linear-gradient(180deg, #2F4F4F 0%, rgba(0, 0, 0, 0.1)40%), url(${img1})`,
          backgroundSize: "cover",
          height: "100vh",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="d-flex align-items-center justify-content-center flex-column mb-5"
          style={{ height: "auto" }}
        >
          <hr />
          <h1 style={{ marginTop: "200px", color: "white" }}>
            Welcome to BookMyBus
          </h1>
          <hr />
          <div className="d-grid gap-4 d-md-flex justify-content-md-end">
            <Link to="/login">
              <button type="button" class="btn btn-secondary">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button type="button" class="btn btn-secondary">
                SignUp
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
