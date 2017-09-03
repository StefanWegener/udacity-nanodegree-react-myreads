import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Input } from 'antd';
import _ from 'lodash';

import * as BooksAPI from '../../BooksAPI';

import './styles.css';

import ShelfComponent from '../MainScreen/ShelfComponent';

const { Header, Footer, Content } = Layout;

class SearchScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      books: [],
      savedBooks: [],
    };

    this.search = _.debounce(this.search, 250);
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ savedBooks: books });
    });
  }

  search = async (query = '') => {
    if (query !== '') {
      let searchResults = await BooksAPI.search(query, 25);
      if (!searchResults.error) {
        searchResults = searchResults.map((b) => {
          const savedBook = this.state.savedBooks.find(s => s.id === b.id);

          return {
            ...b,
            shelf: savedBook ? savedBook.shelf : 'none',
          };
        });
        this.setState({ books: searchResults });
      }
    } else {
      this.setState({ books: [] });
    }
  };

  handleChange = async (event) => {
    const query = event.target.value;
    this.setState({ query });
    this.search(query);
  };

  changeShelf = (book, newShelf) => {
    BooksAPI.update(book, newShelf);
  };

  render() {
    return (
      <Layout style={{ height: '100vh' }}>
        <Header
          style={{
            position: 'fixed',
            width: '100%',
            textAlign: 'center',
            color: 'white',
            fontSize: 24,
          }}
        >
          <Link to="/">Back </Link>
          MyReads App Search
        </Header>

        <Content
          style={{
            marginTop: 64,
            padding: 20,
            height: 0,
            flexGrow: 1,
            overflowY: 'scroll',
          }}
        >
          <Input
            placeholder="Enter Search Term"
            value={this.state.query}
            onChange={this.handleChange}
          />

          <ShelfComponent
            title="Search Results"
            shelf="*"
            changeShelf={this.changeShelf}
            books={this.state.books}
          />
        </Content>

        <Footer style={{ textAlign: 'center' }}>MyReads App ©2017 Created by Stefan Wegener</Footer>
      </Layout>
    );
  }
}

export default SearchScreen;
