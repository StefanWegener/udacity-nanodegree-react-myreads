import React, { Component } from "react";

import "./styles.css";

import { Layout, Button, Collapse, Card, Row, Col } from "antd";

import { Link } from "react-router-dom";

import { getAll } from "../../BooksAPI";

const { Header, Footer, Sider, Content } = Layout;
const Panel = Collapse.Panel;

class MainScreen extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    getAll().then(books => {
      this.setState({ books });
    });
  }

  renderBook = book => {
    return (
      <Col key={book.identifier} span={4}>
        <Card
          style={{ width: 240 }}
          bodyStyle={{ padding: 0 }}
          extra={<a href="#">More</a>}
        >
          <div className="custom-image">
            <img alt="example" width="100%" src={book.imageLinks.thumbnail} />
          </div>
          <div className="custom-card">
            <h3>
              {book.title}
            </h3>
            <p>
              {book.authors.map((a, i) => {
                if (i < book.authors.length - 1) return `${a}, `;
                else {
                  return a;
                }
              })}
            </p>
          </div>
        </Card>
      </Col>
    );
  };

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
          MyReads App
        </Header>

        <Content
          style={{
            marginTop: 64,
            padding: 20,
            height: 0,
            backgroundColor: "white",
            flexGrow: 1,
            overflowY: "scroll"
          }}
        >
          <Collapse
            bordered={false}
            defaultActiveKey={["currentlyReading", "wantToRead", "read"]}
          >
            <Panel header="Currently Reading" key="currentlyReading">
              <Row type="flex" justify="start">
                {this.state.books
                  .filter(b => b.shelf === "currentlyReading")
                  .map(this.renderBook)}
              </Row>
            </Panel>
            <Panel header="Want to Read" key="wantToRead">
              <Row type="flex" justify="start">
                {this.state.books
                  .filter(b => b.shelf === "wantToRead")
                  .map(this.renderBook)}
              </Row>
            </Panel>
            <Panel header="Read" key="read">
              <Row type="flex" justify="start">
                {this.state.books
                  .filter(b => b.shelf === "read")
                  .map(this.renderBook)}
              </Row>
            </Panel>
          </Collapse>
        </Content>

        <div style={{ position: "absolute", bottom: 20, right: 20 }}>
          <Link to="/search">
            <Button type="primary" shape="circle" icon="plus" size="large" />
          </Link>
        </div>
      </Layout>
    );
  }
}

export default MainScreen;
