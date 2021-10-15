import React from "react";
import styled from "styled-components";

const LinkStyles = styled.div`
  .flex-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    align-items: center;
  }

  .flex-item:nth-child(1) {
    order: 0;
    flex: 0 1 auto;
    align-self: auto;
  }

  .flex-item:nth-child(2) {
    order: 0;
    flex: 0 1 auto;
    align-self: auto;
  }

  .flex-item:nth-child(3) {
    order: 0;
    flex: 0 1 auto;
    align-self: auto;
  }
`;

const Links = () => {
  return (
    <LinkStyles>
      <h1>Links</h1>
      <div className="flex-container">
        <div className="flex-item">
          One
        </div>
        <div className="flex-item">
          Two
        </div>
        <div className="flex-item">
          Three
        </div>
        <div className="flex-item">
          Four
        </div>
      </div>
    </LinkStyles>
  )
}

export default Links