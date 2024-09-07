import { Component } from 'react';
import { Box, Text, Button } from '@chakra-ui/react';
import { colors } from './constants/colors';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <Box
          className="flex flex-col items-center justify-center h-screen"
          style={{ backgroundColor: colors.background }}
        >
          <Box className="bg-white p-8 rounded-lg shadow-md text-center">
            <Text
              className="text-4xl font-bold"
              style={{ color: colors.primary }}
            >
              Oops! Something went wrong.
            </Text>
            <Text className="text-xl mt-4" style={{ color: colors.text }}>
              We're sorry for the inconvenience. Please try again later.
            </Text>
            <Button
              className="mt-6 bg-primary hover:bg-hover text-white font-bold py-2 px-4 rounded"
              onClick={this.handleReload}
            >
              Reload Page
            </Button>
          </Box>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
