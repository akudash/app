import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = { error: null, loading: true, d1: "" };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch("https://catfact.ninja/fact")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => this.setState({ d1: data.fact }))
      .catch((e1) => {
        this.setState({ ...this.state, error: e1 });
      })
      .finally(() => {
        this.setState({ ...this.state, loading: false });
      });
  };

  handleClick = () => {
    this.fetchData();
  };

  render() {
    if (this.state.loading) return <p>Loading...</p>;
    if (this.state.error) return <p>Error!</p>;
    return (
      <div>
        <p className="title1">A fact about cats:</p>
        <p>{this.state.d1}</p>
        <button onClick={this.handleClick}>Next fact</button>
      </div>
    );
  }
}

export default App;
