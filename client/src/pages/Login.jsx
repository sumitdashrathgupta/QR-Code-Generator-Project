import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";


export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const {storeTokenInLS} = useAuth();
  const navigate = useNavigate();

  // let handle the input field value
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  // handle form on submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        alert("Login successful");
        const res_data = await response.json();
        storeTokenInLS(res_data.token);

        navigate("/");
      } else {
        alert("Invalid email and password")
        console.log("error inside response ", "error");
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div class="form-popup">
        <div class="form-box login">
          <div class="form-details">

          </div>
          <div class="form-content">
            <h2>Login</h2>
            <form onSubmit={handleSubmit} >
              <div class="input-field">
                <input type="email" name="email"
                  value={user.email}
                  onChange={handleInput} required />
                <label>Email</label>
              </div>
              <div class="input-field">
                <input type="password" name="password"
                  value={user.password}
                  onChange={handleInput} required />
                <label>Password</label>
              </div>
              <button type="submit">Login</button>
            </form>
            <div class="bottom-link">
              Don't have an account?
              <a href="/register" id="signup-link">Register</a>
            </div>
          </div>
        </div>
      </div></>
  );
};