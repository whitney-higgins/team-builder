import React from "react";
// - [ ] Create a `Form.js` file and build out your form markup.

// - [ ] Build inputs for `name`, `email` and `role` (backend engineer, frontend engineer, designer, etc. Use your imagination).

export default function TeamForm(props) {
  console.log(props);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    props.change(name, value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.submit();
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="form-inputs">
        <label>
          Name
          <input
            name="name"
            type="text"
            placeholder="name"
            maxLength="30"
            value={props.values.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email
          <input
            name="email"
            type="text"
            placeholder="email"
            maxLength="30"
            value={props.values.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Role
          <input
            name="role"
            type="text"
            placeholder="role"
            maxLength="30"
            value={props.values.role}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="add new team member" />
      </div>
    </form>
  );
}
