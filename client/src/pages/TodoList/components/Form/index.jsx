import React from "react";
import { useDispatch } from "react-redux";

import { Input, Button, Form } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import { createTodo } from "../../../../redux/todos/api";

const AddTodoForm = (props) => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(createTodo(values));
  };

  return (
    <Form
      style={{ justifyContent: "center", paddingLeft: "16px" }}
      layout="inline"
      onFinish={handleSubmit}
    >
      <Form.Item name="todo">
        <Input placeholder="Add new todo" />
      </Form.Item>
      <Form.Item>
        <Button
          icon={<PlusOutlined />}
          type="primary"
          htmlType="submit"
          shape="circle"
        />
      </Form.Item>
    </Form>
  );
};

export default AddTodoForm;
