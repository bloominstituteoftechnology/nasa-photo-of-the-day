import React from "react";
import "./App.css";
import styled from "styled-components";

const StyledThings = styled.div`
  display: flex;
  width: 100%;
  margin-top: 5%;
`;
const PTags = styled.div`
  flex-direction: column;
  background-color: lightgray;
`;

const PTagsB = styled.div`
  border: 1px black solid;
  background-color: lightgray;
  margin: 0 5%;
`;

const PTags2 = styled.div`
  margin: 10% 5%;
  padding: 0 15%;
`;
const PTagsCopy = styled.div`
  background-color: #fa657f;
`;

const PTagsExp = styled.div`
  background-color: #64f1ff;
`;
const PTagsDate = styled.div`
  background-color: white;
`;

const ImgTag = styled.div`
  height: 50%;
  width: 50%;
  margin-right: 5%;
`;

const Component1 = (props) => {
  const { nasaAPI } = props;
  return (
    <StyledThings>
      <PTagsB>
        <PTags>
          <PTags2>
            <PTagsCopy>
              <p> CopyRight: {nasaAPI.copyright}</p>
            </PTagsCopy>
          </PTags2>

          <PTags2>
            <PTagsDate>
              <p> Date: {nasaAPI.date} </p>
            </PTagsDate>
          </PTags2>

          <PTags2>
            <PTagsExp>
              <p> Explanation: {nasaAPI.explanation} </p>
            </PTagsExp>
          </PTags2>
        </PTags>
      </PTagsB>
      <ImgTag>
        <img src={nasaAPI.url} alt="Item of the day" />
      </ImgTag>
    </StyledThings>
  );
};

export default Component1;
