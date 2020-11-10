import React from "react";
import styled from "styled-components";

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -40px;
`;
export default function PageTitle() {
  return (
    <PageWrapper>
      <img
        src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg"
        alt="Nasa Logo"
      />
      <h1>Photo of The Day</h1>
    </PageWrapper>
  );
}
