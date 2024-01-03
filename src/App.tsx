import * as React from "react";
import { Component } from "react";
import AppTab from "./components/AppTab";
import Header from "./components/AppHeader";
import AppSideBar from "./components/AppSideBar";
import AppHeader from "./components/AppHeader";
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
          }}
        >
          <AppSideBar></AppSideBar>
        </div>
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
            }}
          >
            <AppHeader></AppHeader>
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
