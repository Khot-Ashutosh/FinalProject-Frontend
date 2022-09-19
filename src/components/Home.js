import React from "react";
import img1 from "./Bus1.jpg";
import Footer1 from "./Footer1";
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
            <button type="button" class="btn btn-outline-danger">
              Login
            </button>

            <button type="button" class="btn btn-outline-danger">
              SignUp
            </button>
          </div>
        </div>
      </div>
      <Footer1 />
    </div>
  );
}

export default Home;
