import React from "react";
// - [ ] Create a `Form.js` file and build out your form markup.

// - [ ] Build inputs for `name`, `email` and `role` (backend engineer, frontend engineer, designer, etc. Use your imagination).

export default function TeamForm(props) {
  console.log(props);
  return (
    <form className="container">
      <div className="form-inputs">
        <label>
          Name
          <input
            name="name"
            type="text"
            placeholder="name"
            maxLength="30"
            // value={name}
            // onChange={onChange}
          />
        </label>
        <label>
          Email
          <input
            name="email"
            type="text"
            placeholder="email"
            maxLength="30"
            // value={email}
            // onChange={onChange}
          />
        </label>
        <label>
          Role
          <input
            name="role"
            type="text"
            placeholder="role"
            maxLength="30"
            // value={role}
            // onChange={onChange}
          />
        </label>
      </div>
    </form>
  );
}
