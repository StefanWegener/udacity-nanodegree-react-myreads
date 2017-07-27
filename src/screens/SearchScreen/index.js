import React from 'react';
import { Layout } from 'antd';

import './styles.css';

const { Header, Footer, Content } = Layout;

function SearchScreen() {
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
        MyReads App Search
      </Header>

      <Content
        style={{
          marginTop: 64,
          padding: 20,
          height: 0,
          backgroundColor: 'red',
          flexGrow: 1,
          overflowY: 'scroll',
        }}
      >
        <div>Test</div>
      </Content>

      <Footer style={{ textAlign: 'center' }}>MyReads App ©2017 Created by Stefan Wegener</Footer>
    </Layout>
  );
}

export default SearchScreen;
