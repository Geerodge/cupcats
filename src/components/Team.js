import React from "react";
import styled from "styled-components";

const TeamStyles = styled.div`

section {
  & h2 {
    margin-top: 0px;
    font-size: clamp(4rem, 4vw, 5rem);
  }
  & h3 {
    margin-bottom: 0px;
    color: var(--quaternary);
    text-transform: uppercase;
  }
}

.team-container {
  display: flex;
}
`;

const Team = () => {
  return (
    <TeamStyles>
      <section>
        <h3 className="header-3">Who's Behind Cupcats</h3>
        <h2 className="header-2">Our Team</h2>
        <div className="team-container">
          <div className="team-container__members">
            <div className="members--one">
              <h3>cupkitten</h3>
            </div>
            <div className="members--two">
              <h3>catfish</h3>
            </div>
            <div className="members--three">
              <h3>unevenpun</h3>
            </div>
            <div className="members--four">
              <h3>Lasalien</h3>
            </div>
            <div className="members--five">
              <h3>oranJ</h3>
            </div>
          </div>
          <div className="team-container__special">
            <div className="special--one">
              <h3>somename</h3>
            </div>
            <div className="special--two">
              <h3>somename</h3>
            </div>
            <div className="special--three">
              <h3>somename</h3>
            </div>
            <div className="special--four">
              <h3>somename</h3>
            </div>
          </div>
        </div>
      </section>
    </TeamStyles>
  )
}

export default Team;