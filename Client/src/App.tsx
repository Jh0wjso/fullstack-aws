import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Routes";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Router />
    </BrowserRouter>
  );
};

export default App;
