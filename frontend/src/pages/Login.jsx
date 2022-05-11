import { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";

function Login() {
  const { formData, setFormData } = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setFormData((prevstate) => ({
      ...prevstate,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="heading">
        <FaSignInAlt /> Login
        <p>Login and start setting goals</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              className="form-control"
              type="email"
              id="email"
              name="email"
              value={formData?.email}
              placeholder="Enter your email"
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <input
              className="form-control"
              type="password"
              id="password"
              name="password"
              value={formData?.password}
              placeholder="Enter your password"
              onChange={onChange}
            />
          </div>
          {/* <div className="form-group"> */}
          <button className="btn btn-block">Submit</button>
          {/* </div> */}
        </form>
      </section>
    </>
  );
}

export default Login;
