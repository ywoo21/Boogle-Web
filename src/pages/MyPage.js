import React, { Component } from 'react';
import axios from 'axios';
import MyPageBanner from '../components/MyPage/MyPageBanner';

class MyPage extends Component {

  state = {

  }

  render() {
    return (
      <section id="mypage">
        <MyPageBanner></MyPageBanner>
      </section>
    );
  };
}

export default MyPage;
