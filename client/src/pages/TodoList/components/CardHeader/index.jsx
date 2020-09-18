import React from "react";

import { Switch } from "antd";
import { CheckCircleTwoTone, CloseCircleTwoTone } from "@ant-design/icons";

import { Container } from "./styles";

const CardHeader = (props) => {
  return (
    <Container>
      <CloseCircleTwoTone
        twoToneColor={props.completed ? "rgb(225,225,225)" : "#eb2f96"}
        style={{ fontSize: 25 }}
      />
      <Switch defaultChecked={props.completed} onChange={props.switchStatus} />
      <CheckCircleTwoTone
        twoToneColor={props.completed ? "#52c41a" : "rgb(225,225,225)"}
        style={{ fontSize: 25 }}
      />
    </Container>
  );
};

export default CardHeader;
