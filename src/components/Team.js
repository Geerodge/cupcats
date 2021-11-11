import React from "react";
import styled from "styled-components";
import Logo from "../components/img/Image";

const TeamStyles = styled.div`

section {
  margin: 1rem;
  text-align: center;
  & h2 {
    margin-top: 0px;
    font-size: clamp(4rem, 4vw, 5rem);
  }
  & h3.subheading {
    color: var(--quaternary);
    text-transform: uppercase;
  }
}

.team-container {
  display: flex;
  flex-flow: column wrap;
  & h3 {
    color: var(--quaternary);
  }
}

.gatsby-image-wrapper {
  margin: 0 auto;
}

@media only screen 
    and (min-width: 576px) {

}

@media only screen 
  and (min-width: 768px) {

}

@media only screen 
  and (min-width: 1000px) {

}


`;

const Team = () => {
  return (
    <TeamStyles>
      <section>
        <h3 className="heading-3 subheading">Who's Behind Cupcats</h3>
        <h2 className="heading-2">Our Team</h2>
        <div className="team-container">
          <div className="team-container__members">
            <div className="members--one">
              <Logo />
              <h3 className="heading-3">cupkitten</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas pretium aenean pharetra magna ac placerat. Amet commodo nulla facilisi nullam vehicula ipsum a. Eget dolor morbi non arcu. Sollicitudin ac orci phasellus egestas.</p>
            </div>
            <div className="members--two">
              <Logo />
              <h3 className="heading-3">catfish</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas pretium aenean pharetra magna ac placerat. Amet commodo nulla facilisi nullam vehicula ipsum a. Eget dolor morbi non arcu. Sollicitudin ac orci phasellus egestas.</p>
            </div>
            <div className="members--three">
              <Logo />
              <h3 className="heading-3">unevenpun</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas pretium aenean pharetra magna ac placerat. Amet commodo nulla facilisi nullam vehicula ipsum a. Eget dolor morbi non arcu. Sollicitudin ac orci phasellus egestas.</p>
            </div>
            <div className="members--four">
              <Logo />
              <h3 className="heading-3">Lasalien</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas pretium aenean pharetra magna ac placerat. Amet commodo nulla facilisi nullam vehicula ipsum a. Eget dolor morbi non arcu. Sollicitudin ac orci phasellus egestas.</p>
            </div>
            <div className="members--five">
              <Logo />
              <h3 className="heading-3">oranJ</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas pretium aenean pharetra magna ac placerat. Amet commodo nulla facilisi nullam vehicula ipsum a. Eget dolor morbi non arcu. Sollicitudin ac orci phasellus egestas.</p>
            </div>
          </div>
          <div className="team-container__special">
            <h2 className="heading-2">Special Thanks To</h2>
            <div className="special--one">
              <Logo />
              <h3 className="heading-3">somename</h3>
            </div>
            <div className="special--two">
              <Logo />
              <h3 className="heading-3">somename</h3>
            </div>
            <div className="special--three">
              <Logo />
              <h3 className="heading-3">somename</h3>
            </div>
            <div className="special--four">
              <Logo />
              <h3 className="heading-3">somename</h3>
            </div>
          </div>
        </div>
      </section>
    </TeamStyles>
  )
}

export default Team;