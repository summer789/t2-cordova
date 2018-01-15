import React, { Component } from 'react';
import { connect } from 'dva';
// import { Link } from 'dva/router';
// import { Button } from 'antd-mobile';
import { Page, Button, BackButton, Toolbar, ToolbarButton, Icon } from 'react-onsenui';
import ons from 'onsenui';
// import styles from './IndexPage1.css';

class IndexPage1 extends Component {
  handleClick = () => {
    ons.notification.alert('ons.!');
  }
  renderToolbar = () => {
    return (
      <Toolbar>
        <BackButton />
        <div className="center">My app</div>
        <div className="right">
          <ToolbarButton>
            <Icon icon="ion-navicon, material:md-menu" />
          </ToolbarButton>
        </div>
      </Toolbar>
    );
  }
  render() {
    return (
      <Page key="IndexPage1" renderToolbar={this.renderToolbar}>
        {/* <Link to="/">back</Link> */}
        <Button onClick={this.handleClick}>Tap me1111!</Button>
      </Page>
    );
  }
}


IndexPage1.propTypes = {
};

export default connect()(IndexPage1);
