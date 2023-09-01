import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const root = ReactDOM.createRoot(document.getElementById("root"));

/*
* Header
  - Logo
  - Nav Items
* Body
  - Search
  - RestaurantContainer
    - RestaurantCard
* Footer
  - Copyright
  - Links
  - Address
  - Contact
*/












const AppLayout = () => {
  return(
    <div className="app">
      <Header />
      <Body />
    </div>
  );
}


root.render(<AppLayout />);