import React from "react";

import { Form, Input, DatePicker } from "antd";
import moment from "moment";

const UpdateForm = (props) => {
  const range = (start, end) => {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  };

  const disabledDate = (current) => {
    return current && current < moment().startOf("day");
  };

  const disabledDateTime = () => {
    return {
      disabledHours: () => range(0, 24).splice(0, moment().hours()),
    };
  };

  return (
    <Form
      onFinish={(values) => props.update(values)}
      form={props.form}
      layout="vertical"
      initialValues={{
        todo: props.data.todo && props.data.todo,
        dueDate: props.data.dueDate && moment(props.data.dueDate),
      }}
    >
      <Form.Item name="todo" label="Todo" required>
        <Input placeholder="Name" />
      </Form.Item>
      <Form.Item name="dueDate" label="Due Date">
        <DatePicker
          format="YYYY-MM-DD HH:mm"
          disabledDate={disabledDate}
          disabledTime={disabledDateTime}
          showTime={{ format: "HH:mm" }}
        />
      </Form.Item>
    </Form>
  );
};

export default UpdateForm;
