// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

// Pages
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Friends from "./pages/Friends";
// import Recommendations from "./pages/Recommendations";
// import Dashboard from "./pages/Dashboard";

// Layout
// import Layout from "./components/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Friends from "./pages/Friends";
// import Recommendations from "./pages/Recommendations";
import Layout from "./pages/Layout";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Wrap all routes with the Layout */}
          <Route
            path="/dashboard"
            element={
              <Layout>
                <Dashboard />
              </Layout>
            }
          />
          <Route
            path="/friends"
            element={
              <Layout>
                <Friends />
              </Layout>
            }
          />
         
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
