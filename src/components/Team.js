import React from "react";
import styled from "styled-components";
import Logo from "../components/img/Image";

const TeamStyles = styled.div`

section {
  margin: 5rem 1rem;
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

.card {
  margin: 4rem;
  padding: 2rem;
  background-color: var(--white);
  border-radius: 8px;
  & .gatsby-image-wrapper {
    margin-top: -4rem; // opposite to the margin-top value
  }
}

@media only screen 
    and (min-width: 576px) {

    .team-container__special {
      display: flex;
      flex-flow: row wrap;
    }

    .special--one,
    .special--two,
    .special--three,
    .special--four {
      width: 45%;
      margin: 2.5%;
    }

}

@media only screen 
  and (min-width: 768px) {

  .team-container__members,
  .team-container__special {
    display: flex;
    flex-flow: row wrap;
  }

  .members--one {
    width: 100%;
  }

  .members--two,
  .members--three,
  .members--four,
  .members--five {
    width: 50%;
  }

  .members--one .card {
    width: 50%;
    margin: 4rem auto;
  }

  .card {
    margin-left: 2rem;
    margin-right: 2rem;
  }

  .team-container h2 {
    margin-top: 2rem;
  }

}

@media only screen 
  and (min-width: 1200px) {

  section {
    margin: 5rem;
  }

  .members--one {
    width: 100%;
  }

  .members--two,
  .members--three,
  .members--four,
  .members--five {
    width: 25%;
  }
  
  .team-container__special {
    width: 50%;
    margin: 0 auto;
  }

  .special--one,
  .special--two,
  .special--three,
  .special--four {
    width: 20%;
  }

  .members--one .card {
    width: 50%;
  }
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
              <div className="card">
                <Logo />
                <h3 className="heading-3">cupkitten</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas pretium aenean pharetra magna ac placerat. Amet commodo nulla facilisi nullam vehicula ipsum a. Eget dolor morbi non arcu. Sollicitudin ac orci phasellus egestas.</p>
              </div>
            </div>
            <div className="members--two">
              <div className="card">
                <Logo />
                <h3 className="heading-3">catfish</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas pretium aenean pharetra magna ac placerat. Amet commodo nulla facilisi nullam vehicula ipsum a. Eget dolor morbi non arcu. Sollicitudin ac orci phasellus egestas.</p>
              </div>
            </div>
            <div className="members--three">
              <div className="card">
                <Logo />
                <h3 className="heading-3">unevenpun</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas pretium aenean pharetra magna ac placerat. Amet commodo nulla facilisi nullam vehicula ipsum a. Eget dolor morbi non arcu. Sollicitudin ac orci phasellus egestas.</p>
              </div>
            </div>
            <div className="members--four">
              <div className="card">
                <Logo />
                <h3 className="heading-3">Lasalien</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas pretium aenean pharetra magna ac placerat. Amet commodo nulla facilisi nullam vehicula ipsum a. Eget dolor morbi non arcu. Sollicitudin ac orci phasellus egestas.</p>
              </div>
            </div>
            <div className="members--five">
              <div className="card">
                <Logo />
                <h3 className="heading-3">oranJ</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas pretium aenean pharetra magna ac placerat. Amet commodo nulla facilisi nullam vehicula ipsum a. Eget dolor morbi non arcu. Sollicitudin ac orci phasellus egestas.</p>
              </div>
            </div>
          </div>
          <h2 className="heading-2">Special Thanks To</h2>
          <div className="team-container__special">
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