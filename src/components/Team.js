import React from "react";
import styled from "styled-components";
import Cupkitten from "../components/img/Cupkitten";
import Cupcatchips from "../components/img/Cupcatchips";
import CupcatOne from "../components/img/CupcatOne";
import CupcatTwo from "../components/img/CupcatTwo";
import CupcatThree from "../components/img/CupcatThree";
import CupcatFour from "../components/img/CupcatFour";

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
                <Cupkitten />
                <h3 className="heading-3">cupkitten</h3>
                <p>Idea owner of the Cupcats, and the artist. Every Cupcat trait is hand drawn by cupkitten, started in July and finished in September. Even though she is not a professional illustrator, cupkitten learned a lot of things while making Cupcats and improved herself to create a diverse collection.</p>
              </div>
            </div>
            <div className="members--two">
              <div className="card">
                <Cupcatchips />
                <h3 className="heading-3">catfish</h3>
                <p>Cupkitten's boyfriend, helping with ideas, decisions, and other things cupkitten can't find time for.</p>
              </div>
            </div>
            <div className="members--three">
              <div className="card">
                <Cupcatchips />
                <h3 className="heading-3">unevenpun</h3>
                <p>Web developer turned into a lot of things. Learned Solidity just to help cupkitten.</p>
              </div>
            </div>
            <div className="members--four">
              <div className="card">
                <Cupcatchips />
                <h3 className="heading-3">Lasalien</h3>
                <p>Cupkitten and catfish's friend who knows a lot of things about Discord. Helping with community stuff.</p>
              </div>
            </div>
            <div className="members--five">
              <div className="card">
                <Cupcatchips />
                <h3 className="heading-3">oranJ</h3>
                <p>Catfish's friend who is a motion designer. Making animated Cupcats.</p>
              </div>
            </div>
          </div>
          <h2 className="heading-2">Special Thanks To</h2>
          <div className="team-container__special">
            <div className="special--one">
              <CupcatOne />
              <h3 className="heading-3">somename</h3>
            </div>
            <div className="special--two">
              <CupcatTwo />
              <h3 className="heading-3">otherperson</h3>
            </div>
            <div className="special--three">
              <CupcatThree />
              <h3 className="heading-3">kittencups</h3>
            </div>
            <div className="special--four">
              <CupcatFour />
              <h3 className="heading-3">cupdesigner</h3>
            </div>
          </div>
        </div>
      </section>
    </TeamStyles>
  )
}

export default Team;