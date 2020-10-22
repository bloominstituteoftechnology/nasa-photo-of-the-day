import styled from "styled-components";

const Title = styled.h1`
  font-size: 2.5rem;
  color: White;
  padding: 10px;
  font-family: "Poppins", sans-serif;
`;

const PictureInfo = styled.p`
  font-size: 1rem;
  color: White;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.333;
  text-align: center;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
`;

const PictureTitle = styled.h1`
  color: White;
  font-family: "Poppins", sans-serif;
`;

const PictureDate = styled.h5`
  color: White;
  font-family: "Poppins", sans-serif;
`;

const Image = styled.img`
  width: 35rem;
  height: 35rem;
  padding-top: 2rem;
`;

const Container = styled.div`
  background-color: #39576e;
  margin: auto;
  width: 50%;
  padding: 10px;
`;

const HeaderStyle = styled.div`
  background-color: #39576e;
  margin: auto;
  width: 50%;
  padding: 0px;
`;

const ButtonFont = styled.div`
  font-family: "Poppins", sans-serif;
`;

export {
  Title,
  PictureInfo,
  Image,
  Container,
  HeaderStyle,
  PictureTitle,
  PictureDate,
  ButtonFont,
};
