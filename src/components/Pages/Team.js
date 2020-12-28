import React, { Component } from "react";
import Header from "../Common/Header";
import image from "../assets/img/Me.JPG";
import Team from "../Common/Team";

class Teams extends Component {
  render() {
    return (
      <div>
        {" "}
        <Header
          title="About Us"
          subtitle="It's really a great Story"
          buttonText="Tell me More"
          showButton={false}
          image={image}
        />
        <Team />
      </div>
    );
  }
}

export default Teams;
