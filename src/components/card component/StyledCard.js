import styled from "styled-components";

export const StyledCard = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Hammersmith+One&family=Montserrat:wght@600&display=swap");

  background-color: rgb(235, 235, 235);
  width: 30%;
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: -3rem 5rem 1.5rem 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  max-width: 400px;
  margin: 1rem;

  .text-content {
    text-align: left;
    padding: 10%;
  }

  p,
  time {
    font-size: 100%;
    font-family: "Montserrat", sans-serif;
    color: rgb(66, 66, 66);
  }

  .text-content h2 {
    font-size: 1.3rem;
    font-family: "Hammersmith One", sans-serif;
    letter-spacing: 1px;
  }

  //   Responsiveness

  @media (max-width: 880px) {
    width: 40%;
  }

  @media (max-width: 660px) {
    width: 50%;
  }

  @media (max-width: 525px) {
    width: 90%;
  }
`;
