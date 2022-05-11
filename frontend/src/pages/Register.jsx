import { useState } from "react";
import { FaUser } from "react-icons/fa";

function Register() {
  const { formData, setFormData } = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
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
        <FaUser /> Register
        <p>Please create a new account</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              id="name"
              name="name"
              value={formData?.name}
              placeholder="Enter your name"
              onChange={onChange}
            />
          </div>

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

          <div className="form-group">
            <input
              className="form-control"
              type="password"
              id="confirm-password"
              name="confirm-password"
              value={formData?.password2}
              placeholder="confirm-password"
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

export default Register;
