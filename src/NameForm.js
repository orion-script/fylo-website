import React from "react";
import { createRoot } from "react-dom/client";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Emailwas submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="email@example.com"
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

const root = createRoot(document.getElementById("root"));
root.render(<NameForm />);

export default NameForm;
