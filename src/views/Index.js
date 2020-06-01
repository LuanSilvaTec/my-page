
import React from "react";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";

import Profile from './examples/Profile'

class Index extends React.Component {
  //componentDidMount() {
    //document.documentElement.scrollTop = 0;
    //document.scrollingElement.scrollTop = 0;
    //this.refs.main.scrollTop = 0;
  //}
  render() {
    return (
      <>
        <DemoNavbar />
        <Profile/>
      </>
    );
  }
}

export default Index;
