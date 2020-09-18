import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  /* flex-direction: column;
  align-items: center; */
  flex-wrap: wrap;

  @media screen and (max-width: 760px) {
    justify-content: center;
  }
`;
