import styled from "styled-components";

export const Container = styled.div`
  .ant-switch-checked {
    background-color: #52c41a;
  }
  .ant-card-actions {
    background-color: ${(props) =>
      props.completed ? "rgba(82,196,26,0.05)" : "rgba(235,47,150,0.05)"};
  }
`;

export const bodyStyle = (completed) => {
  return {
    backgroundColor: completed
      ? "rgba(82,196,26,0.05)"
      : "rgba(235,47,150,0.05)",
  };
};

export const headStyle = (completed) => {
  return {
    backgroundColor: completed ? "rgba(82,196,26,0.1)" : "rgba(235,47,150,0.1)",
  };
};
