import React, { Component } from "react";

class Acomponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      note: [],
      counter: 0,
    };
    var storedNotes = [];
    this.inputRef = React.createRef();
    this.insertValue = () => {
      this.storedNotes = JSON.parse(localStorage.getItem("Notes"));
      let temp = [];
      if (this.storedNotes != null) temp = this.storedNotes;
      else temp = [...this.state.note];
      temp.push(this.inputRef.current.value);
      this.setState({ note: temp });
    };
  }
  componentDidMount() {
    this.storedNotes = JSON.parse(localStorage.getItem("Notes"));
  }
  componentDidUpdate() {
    this.render();
    localStorage.setItem("Notes", JSON.stringify(this.state.note));
    this.storedNotes = JSON.parse(localStorage.getItem("Notes"));
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row"></div>
          <input
            type={"text"}
            placeholder="enter a to-do"
            id="note"
            ref={this.inputRef}
          />
          <button type="button" onClick={this.insertValue}>
            ADD
          </button>

          {this.storedNotes &&
            this.storedNotes.map((index) => {
              return <li key={index}>{index}</li>;
            })}
        </div>
      </div>
    );
  }
}
export default Acomponent;
