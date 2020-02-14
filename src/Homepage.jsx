import React from "react";
import Link from "./Link.jsx";
import Axios from "axios";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cat: {},
      selected: false
    };
  }
  componentDidMount() {
      console.log('hello homepage')
    Axios.get("https://randomfox.ca/floof/")
      .then(({ data }) => {
        console.log(data);
        return this.setState({ cat: data });
      })
      .catch(error => {
        throw new Error(error);
      });
  }
  render() {
    const { cat } = this.state;
    const { is_next } = this.props;
    return (
      <>
        <img src={cat.image} alt=""></img>
        <Link
          is_next={is_next}
          text={"Find out more!"}
          data={{ url: cat.link }}
          path="/cat"
        />
      </>
    );
  }
}
export default Homepage;
