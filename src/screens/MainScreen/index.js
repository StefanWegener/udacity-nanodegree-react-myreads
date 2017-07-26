import React, { Component } from "react";

import "./styles.css";

import { Layout, Button } from "antd";

import { Link } from "react-router-dom";

import * as BooksAPI from "../../BooksAPI";

import ShelfComponent from "./ShelfComponent";

const { Header, Content } = Layout;

class MainScreen extends Component {
  state = {
    books: undefined
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  // TODO only new sorting now fetchin
  changeShelf = (book, newShelf) => {
    BooksAPI.update(book, newShelf).then(BooksAPI.getAll).then(books => {
      this.setState({ books });
    });
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
          <ShelfComponent
            title="Currently Reading"
            shelf="currentlyReading"
            changeShelf={this.changeShelf}
            books={this.state.books}
          />
          <ShelfComponent
            title="Want to Read"
            shelf="wantToRead"
            changeShelf={this.changeShelf}
            books={this.state.books}
          />
          <ShelfComponent
            title="Read"
            shelf="read"
            changeShelf={this.changeShelf}
            books={this.state.books}
          />
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
