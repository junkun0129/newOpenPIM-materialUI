import * as React from "react";
import { Component } from "react";
import AppTab from "./components/AppTab";
import Header from "./components/Header";
function App() {
  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "skyblue",
        }}
      >
        <div
          style={{
            width: "6%",
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
          }}
        ></div>
        <div
          style={{
            width: "94%",
            height: "100%",
            marginLeft: "30px",
            backgroundColor: "skyblue",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "10%",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
            }}
          >
            <Header></Header>
          </div>
          <div
            style={{
              width: "100%",
              height: "90%",
              marginTop: "20px",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
            }}
          >
            <AppTab></AppTab>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
