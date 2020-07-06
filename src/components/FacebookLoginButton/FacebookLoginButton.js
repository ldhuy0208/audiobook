import React from "react";
import FacebookLogin from "react-facebook-login";

class FacebookLoginButton extends React.Component {
  componentClicked = () => {
    console.log(1);
  };

  responseFacebook = (response) => {
    console.log(response);
  };
  render() {
    return (
      <div>
        <FacebookLogin
          appId="559197728086503"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      </div>
    );
  }
}

export default FacebookLoginButton;
