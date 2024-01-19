import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

export const Register = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  const handleInput = (e) => {
    console.log(e);
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
    console.log(user);

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log("response data : ", response);

      if (response.ok) {
        setUser({ email: "", password: "" });
        navigate("/")
        alert("registration successful");
        const res_data = await response.json();
        storeTokenInLS(res_data.token);
        console.log("res from server", res_data);
      } else {
        alert("Invalid email and password")
        console.log("error inside response ", "error");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <>
      <div class="form-popup">
        <div class="form-box login sign">
          <div class="form-details">

          </div>
          <div class="form-content">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
              <div class="input-field">
                <input type="email" id="emailid" name="email" value={user.email}
                  onChange={handleInput} autoComplete="off" required />
                <label for="emailid">Email</label>
              </div>
              <div class="input-field">
                <input type="password" id="pass" name="password" value={user.password}
                  onChange={handleInput} autoComplete="off" required />
                <label for="pass">Password</label>
              </div>
              <button type="submit">Register</button>
            </form>
            <div class="bottom-link">
              Already have an account?
              <a href="/login" id="signup-link">Login</a>
            </div>
          </div>
        </div>
      </div>
    </>)
    ;
};