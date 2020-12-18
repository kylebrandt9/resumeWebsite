import React, { Component } from "react";
import Team from "./Team";

class TeamMember extends Component {
  render() {
    return (
      <div className="col-lg-4">
        <div className="team-member">
          <img
            className="mx-auto rounded-circle"
            src={this.props.image}
            alt=""
          />
          <h4>{this.props.name}</h4>
          <p className="text-muted">{this.props.role}</p>
          <a
            className="btn btn-dark btn-social mx-2"
            href="https://answers.microsoft.com/en-us/profile/56ba47aa-fc69-404d-aca6-3b4d6c37113d?sort=LastReplyDate&dir=Desc&tab=Threads&forum=allcategories&meta=&status=&mod=&advFil=&postedAfter=undefined&postedBefore=undefined&threadType=All&page=1"
          >
            <i class="fab fa-microsoft"></i>
          </a>
          <a
            className="btn btn-dark btn-social mx-2"
            href="https://github.com/kylebrandt9"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            className="btn btn-dark btn-social mx-2"
            href="https://www.linkedin.com/in/kylebrandt9/"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    );
  }
}
export default TeamMember;
