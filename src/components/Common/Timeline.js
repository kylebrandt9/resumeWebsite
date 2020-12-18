import React, { Component } from "react";
class Timeline extends Component {
  render() {
    return (
      <section className="page-section" id="about">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Work Experience</h2>
            <h3 className="section-subheading text-muted">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>
          <ul className="timeline">
            <li>
              <div className="timeline-image">
                <img
                  className="rounded-circle img-fluid"
                  src="/img/about/Cotiviti.png"
                  alt=""
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>Cotiviti - CRM Admin</h4>
                  <h6 className="subheading">July 2020 - Present</h6>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Develop and manage Microsoft Dynamics CRM Integrate other
                    programs with Dynamics CRM Create Power BI reports Implement
                    enhancements including creating of custom objects,
                    workflows, email alerts, reports and campigns Administrate
                    over HubSpot, ZoomInfo, Tibco Scribe Sync
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img
                  className="rounded-circle img-fluid"
                  src="/img/about/WilsonElectronics.png"
                  alt=""
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>Wilson Electronics - CRM Developer & Admin</h4>
                  <h6 className="subheading">May 2016 - July 2020</h6>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Develop and manage Microsoft Dynamics CRM Integrate other
                    programs with Dynamics CRM Create users in SAGE 100 ADV and
                    Microsoft Dynamics CRM Create processes and reports for
                    Dynamics CRM
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-image">
                <img
                  className="rounded-circle img-fluid"
                  src="/img/about/WilsonElectronics.png"
                  alt=""
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>Wilson Electronics - Junior Database Administrator</h4>
                  <h6 className="subheading">May 2016 – Jan 2018</h6>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Ensure the integrity and maintenance of all company
                    databases, as well as support end users utilizing our ERP
                    and reporting systems.
                  </p>
                  <br></br>
                  <p className="text-muted">
                    Ensure the integrity and maintenance of all company
                    databases Create reports using SSRS, and Crystal Reports
                    Create users in SAGE 100 ADV and Microsoft Dynamics CRM Make
                    sure our users have the right permissions on our ERP system.
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img
                  className="rounded-circle img-fluid"
                  src="/img/about/RizePoint.png"
                  alt=""
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>RizePoint (Steton) - Customer Service Representative</h4>
                  <h6 className="subheading">Mar 2014 – Jan 2016</h6>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Serve customers as they call, email or create tickets for
                    our software. Able to communicate effectually in helping
                    solve their issues over the phone or by email. The first
                    line of defense when problems arise with the program. Able
                    to keep a good relationship with the clients as we work to
                    resolve their issues.
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <h4>
                  This
                  <br />
                  Is My
                  <br />
                  Story!
                </h4>
              </div>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Timeline;
