import React, { Component } from "react";
import HubspotForm from "react-hubspot-form";
require("dotenv").config();
///To Do
/// Add a .env file so I can add the portalID there
class Contact extends Component {
  render() {
    return (
      <section className="page-section" id="contact">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Contact Me</h2>
            <h3 className="section-subheading text-muted">
              Please fill out the form below, and I will reach back out to you.
            </h3>

            <HubspotForm
              portalId="6648501"
              formId="ad1a44b7-d3da-4b59-a3af-32fc099a39d0"
              onSubmit={() => console.log("Submit!")}
              onReady={(form) => console.log("Form ready!")}
              loading={<div>Loading...</div>}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
