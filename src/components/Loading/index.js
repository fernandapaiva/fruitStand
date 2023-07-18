import React from "react";
import { ActivityIndicator, StatusBar, Dimensions } from "react-native";

import { Container } from "./styles";

const { height } = Dimensions.get("window");

const LoadingView = () => {
  return (
    <Container height={height + (StatusBar.currentHeight || 0)}>
      <ActivityIndicator size="large" color="#da0d1e" />
    </Container>
  );
};

export default LoadingView;
