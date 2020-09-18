import React from "react";

import { Layout } from "antd";

import TodoList from "./pages/TodoList";
import AddTodoForm from "./pages/TodoList/components/Form";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="layout">
      <Header
        style={{
          position: "fixed",
          width: "100%",
          zIndex: "10",
          padding: "16px 50px",
        }}
      >
        <AddTodoForm />
      </Header>
      <Content style={{ padding: "60px 50px", minHeight: "100vh" }}>
        <TodoList />
      </Content>
      <Footer style={{ textAlign: "center" }}>Created by Ali Mert ©2020</Footer>
    </Layout>
  );
}

export default App;
