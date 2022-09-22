import { useForm } from "react-hook-form";
import "./Login1.css";
import React from "react";
import Header from "./Header";
import img from "./Bus4.jpg";
import swal from "sweetalert";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (e) => {
    alert("Welcome To BookMyBus");
  };

  return (
    <>
      <Header />
      <div
        style={{
          background: `url(${img})`,
          backgroundSize: "cover",
          height: "100vh",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div className="row">
                <div className="col-6"></div>

                <div className="col-4">
                  <div className="card" style={{ padding: "20px" }}>
                    <h3>LOGIN</h3>
                    <br />

                    <br />
                    <label>
                      <b>Email</b>{" "}
                    </label>
                    <input
                      className="form-control"
                      type="email"
                      {...register("email", {
                        required: true,
                        pattern: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,
                      })}
                      placeholder="Your email.."
                    />
                    {errors.email &&
                      swal("Error", "Please enter valid email", "error")}

                    <div className="mb-3">
                      <label>
                        <b>Password</b>
                      </label>

                      <input
                        className="form-control"
                        type="password"
                        {...register("password", {
                          required: true,
                          pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/,
                        })}
                        placeholder="Your password.."
                      />
                      {errors.password &&
                        swal("Error", "Please enter valid password", "error")}
                    </div>

                    <div className="mb-3">
                      <br />
                      <button type="submit" className="btn btn-success">
                        Login
                      </button>
                    </div>
                  </div>
                  <div className="col"></div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
