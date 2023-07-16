import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    agree: false,
  });

  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const fieldValue = type === "checkbox" ? checked : value;
    setFormData((prevData) => ({ ...prevData, [name]: fieldValue }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform any form validation if needed

    // Assuming registration is successful without backend API
    setRegistrationSuccess(true);
  };

  if (registrationSuccess) {
    // Redirect the user to the dashboard route
    window.location.href = "/dashboard";
  }

  return (
    <>
      <h1>Register</h1>
      <p>Register for an account become part of community.</p>
      <p>Receive notificatons if new services pops up</p>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="well well-sm">
              <form className="form-horizontal" method="post">
                <fieldset>
                  <legend className="text-center header">Contact us</legend>
                  <div className="form-group">
                    <span className="col-md-1 col-md-offset-2 text-center">
                      <i className="fa fa-user bigicon"></i>
                    </span>
                    <div className="col-md-8">
                      <input
                        id="fname"
                        name="name"
                        type="text"
                        placeholder="First Name"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <span className="col-md-1 col-md-offset-2 text-center">
                      <i className="fa fa-user bigicon"></i>
                    </span>
                    <div className="col-md-8">
                      <input
                        id="lname"
                        name="name"
                        type="text"
                        placeholder="Last Name"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <span className="col-md-1 col-md-offset-2 text-center">
                      <i className="fa fa-envelope-o bigicon"></i>
                    </span>
                    <div className="col-md-8">
                      <input
                        id="email"
                        name="email"
                        type="text"
                        placeholder="Email Address"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <span className="col-md-1 col-md-offset-2 text-center">
                      <i className="fa fa-phone-square bigicon"></i>
                    </span>
                    <div className="col-md-8">
                      <input
                        id="phone"
                        name="phone"
                        type="text"
                        placeholder="Phone"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <span className="col-md-1 col-md-offset-2 text-center">
                      <i className="fa fa-pencil-square-o bigicon"></i>
                    </span>
                    <div className="col-md-8">
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        placeholder="Enter your message for us here. We will get back to you within 2 business days."
                        rows="7"
                      ></textarea>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-12 text-center">
                      <button type="submit" className="btn btn-primary btn-lg">
                        Submit
                      </button>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
          {/* <div className="col-md-4">

                </div> */}
        </div>
      </div>

      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-4">
          <label htmlFor="validationServer01" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control is-valid"
            id="validationServer01"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4">
          <label htmlFor="validationServer02" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control is-valid"
            id="validationServer02"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4">
          <label htmlFor="validationServerUsername" className="form-label">
            Username
          </label>
          <div className="input-group has-validation">
            <span className="input-group-text" id="inputGroupPrepend3">
              @
            </span>
            <input
              type="username"
              className="form-control is-invalid"
              id="validationServerUsername"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
              required
            />
            <div
              id="validationServerUsernameFeedback"
              className="invalid-feedback"
            >
              Please choose a username.
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input is-invalid"
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleInputChange}
              required
            />
            <label className="form-check-label" htmlFor="invalidCheck3">
              Agree to terms and conditions
            </label>
            <div id="invalidCheck3Feedback" className="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            Submit form
          </button>
        </div>
      </form>
      <p>
        {" "}
        Already have an account? <a href="/login">Login</a>
      </p>
    </>
  );
};

export default RegistrationForm;
