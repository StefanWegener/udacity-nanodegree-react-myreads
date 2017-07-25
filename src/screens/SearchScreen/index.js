import React, { Component } from "react";

import "./styles.css";

import { Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;

class SearchScreen extends Component {
  render() {
    return (
      <Layout style={{ height: "100vh" }}>
        <Header
          style={{
            position: "fixed",
            width: "100%",
            textAlign: "center",
            color: "white",
            fontSize: 24
          }}
        >
          MyReads App Search
        </Header>

        <Content
          style={{
            marginTop: 64,
            padding: 20,
            height: 0,
            backgroundColor: "red",
            flexGrow: 1,
            overflowY: "scroll"
          }}
        >
          <div>Test</div>
        </Content>

        <Footer style={{ textAlign: "center" }}>
          MyReads App ©2017 Created by Stefan Wegener
        </Footer>
      </Layout>
    );
  }
}

export default SearchScreen;
