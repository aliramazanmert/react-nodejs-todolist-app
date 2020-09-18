import React, { useEffect, useState } from "react";

import { Card, Button, Modal, Form } from "antd";
import {
  DeleteFilled,
  EditFilled,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import moment from "moment";

import CardHeader from "../CardHeader";
import UpdateForm from "../UpdateForm";
import { Container, bodyStyle, headStyle } from "./styles";

const { Meta } = Card;
const { confirm } = Modal;

const DAY_MS = 86400000;
const HOUR_MS = 3600000;
const MINUTE_MS = 60000;
const SECOND_MS = 1000;

const TodoCard = (props) => {
  const [intervalMs, setIntervalMs] = useState(DAY_MS);
  const [, forceUpdate] = useState();

  useEffect(() => {
    let timer = setInterval(() => {
      forceUpdate({});
    }, intervalMs);
    return () => {
      clearInterval(timer);
    };
  }, [intervalMs]);

  const detectRemainingTimeAndUnit = () => {
    const timeDiff = (timeUnit) =>
      moment(props.data.dueDate).diff(moment(), timeUnit);
    const returnVal = (timeUnit) =>
      timeDiff(timeUnit) +
      " " +
      timeUnit +
      (timeDiff(timeUnit) === 1 ? "" : "s") +
      " remaining";

    if (timeDiff("day")) {
      if (intervalMs !== DAY_MS) {
        setIntervalMs(DAY_MS);
      }
      return returnVal("day");
    }
    if (timeDiff("hour")) {
      if (intervalMs !== HOUR_MS) {
        setIntervalMs(HOUR_MS);
      }
      return returnVal("hour");
    }
    if (timeDiff("minute")) {
      if (intervalMs !== MINUTE_MS) {
        setIntervalMs(MINUTE_MS);
      }
      return returnVal("minute");
    }
    if (timeDiff("second")) {
      if (intervalMs !== SECOND_MS) {
        setIntervalMs(SECOND_MS);
      }
      return returnVal("second");
    }
  };

  const handleSwitchChange = () => {
    props.update(props.data._id, {
      completed: !props.data.completed,
    });
  };

  const handleUpdateFormSubmit = (body) => {
    props.update(props.data._id, body);
  };

  function showDeleteConfirm() {
    confirm({
      title: "Are you sure to remove this todo?",
      icon: <ExclamationCircleOutlined />,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk: () => props.delete(props.data._id),
    });
  }

  const [form] = Form.useForm();
  function showUpdateConfirm() {
    confirm({
      title: "Edit Todo",
      icon: <EditFilled />,
      content: (
        <UpdateForm
          data={props.data}
          update={handleUpdateFormSubmit}
          form={form}
        />
      ),
      okText: "Update",
      okType: "warning",
      onOk: () => form.submit(),
    });
  }

  return (
    <Container completed={props.data.completed}>
      <Card
        size="small"
        hoverable
        style={{
          width: 300,
          margin: 16,
        }}
        bodyStyle={bodyStyle(props.data.completed)}
        headStyle={headStyle(props.data.completed)}
        extra={
          <CardHeader
            completed={props.data.completed}
            switchStatus={handleSwitchChange}
          />
        }
        actions={[
          <Button
            type="warning"
            icon={<EditFilled />}
            onClick={showUpdateConfirm}
          >
            Edit
          </Button>,
          <Button
            type="primary"
            icon={<DeleteFilled />}
            danger
            onClick={showDeleteConfirm}
          >
            Delete
          </Button>,
        ]}
      >
        <Meta
          title={props.data.todo}
          description={
            !props.data.completed &&
            props.data.dueDate &&
            (moment(props.data.dueDate).diff(moment()) <= 0
              ? "Overdue"
              : detectRemainingTimeAndUnit())
          }
        />
      </Card>
    </Container>
  );
};

export default TodoCard;
