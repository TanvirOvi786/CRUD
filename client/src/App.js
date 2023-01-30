import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReadPage from './pages/ReadPage';
import CreatePage from './pages/createPage';
import UpdatePage from './pages/updatePage';


class App extends Component {
  render() {
    return (

      <Fragment>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ReadPage />}></Route>
            <Route path="/create" element={<CreatePage />}></Route>
            <Route path="/update" element={<UpdatePage />}></Route>

          </Routes>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;