import React, { Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import {Navbar } from './components';
import './App.css';
import { AsynPageLoad } from './utils/lazyRoutes';

const App = () => (
  <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
      <Layout>
        <div className="routes">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route  path="/" element={AsynPageLoad("HomePage")}/> 
            <Route  path="/exchanges" element={AsynPageLoad('Exchanges')}/>
            <Route  path="/cryptocurrencies" element={AsynPageLoad('Cryptocurrencies')}/>
            <Route  path="/crypto/:coinId" element={AsynPageLoad('CryptocurrencyDetails')}/>
            <Route  path="/news" element={AsynPageLoad("News")}/> 
          </Routes>
          </Suspense>
        </div>
      </Layout>
      <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2021
          <Link to="/">
            Cryptoverse Inc.
          </Link> <br />
          All Rights Reserved.
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
    </div>
  </div>
);

export default App;