import React from "react";

import { 
  ErrorImageContainer,
  ErrorImageOverlay,
  ErrorImageText 
} from "./error-boundary.styles";

class ErrorBoundary extends React.Component {
  constructor(){
    super();

    this.state = {
      hasErrored: false,
    }
  }

  static getDerivedStateFromError(error) {
    return {
      hasErrored: true
    }
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render () {
    const { hasErrored } = this.state;

    if(hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/yW2W9SC.png" />
          <ErrorImageText>Sorry this page is broken</ErrorImageText>
        </ErrorImageOverlay>
      );
    }
    const { children } = this.props;
    return children;
  }
}

export default ErrorBoundary;