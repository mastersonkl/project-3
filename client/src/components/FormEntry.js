import React from "react";
import Form from "./Form";

class FormEntry extends React.Component {
  state = {
    fields: {},
  };

  onChange = (updatedValue) => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue,
      },
    });
  };

  render() {
    return (
      <div className="ui container">
        <Form onChange={(fields) => this.onChange(fields)} />
        {JSON.stringify(this.state.fields, null, 2)}
      </div>
    );
  }
}

export default FormEntry;
