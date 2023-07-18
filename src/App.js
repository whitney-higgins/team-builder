import "./App.css";
import { useState } from "react";
import Form from "./Form";

// - [ ] You will have to decide which component is responsible for maintaining the _state_ of the form (`Form` itself, or its parent `App`). Each approach has advantages and disadvantages.

// - [ ] Render your `Form` component in `App`. The `App` component should hand down through props any callback(s) needed for `Form` to do its job (adding new members to your team members state on submit).

const team = { name: "", email: "", role: "" };

function App() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [formValues, setFormValues] = useState(team);

  const onSubmit = () => {
    setTeamMembers([formValues, ...teamMembers]);
  };

  const onChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };
  return (
    <div className="App">
      <Form values={formValues} submit={onSubmit} change={onChange} />
    </div>
  );
}

export default App;
