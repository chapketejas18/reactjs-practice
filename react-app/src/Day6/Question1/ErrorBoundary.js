import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;
    if (hasError) {
      return (
        <div>
          <center>
            <p style={{ fontSize: "4rem", color: "#BEBEBE" }}>Ooops!</p>
            <p style={{ fontSize: "1rem", color: "#0a0a0a" }}>
              THIS PAGE DOSEN&apos;T EXIST OR UNAVAILABLE
            </p>
          </center>
        </div>
      );
    }
    return children;
  }
}

export default ErrorBoundary;