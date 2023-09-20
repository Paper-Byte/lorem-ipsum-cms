import React from "react";
import Header from "./Header";
import Navbar from "./Navbar.jsx";
import CreateClothing from "./CreateClothing";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          noah broke it
          <p>{this.state.error.message}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <ErrorBoundary>
        <CreateClothing />
      </ErrorBoundary>
    </div>
  );
}

export default App;
