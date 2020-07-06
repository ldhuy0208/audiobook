import React from "react";
import Layout from "./containers/Layout/Layout";
import Grand from "./Grand";
import ButtonDoiHo from "./ButtonDoiHo";

class App extends React.Component {
  render() {
    // return <Layout />;
    return (
      <div>
        <Grand />
        <ButtonDoiHo />
      </div>
    );
  }
}

export default App;
