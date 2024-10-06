import { Component } from "react";
import {
  constructorStyle,
  didMountingStyle,
  didUpdatingStyle,
  renderingStyle,
  unmountingStyle,
} from "../Styles";

interface IProps {}
interface IState {
  counter: number;
  products: [];
}
class HomePage extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      counter: 0,
      products: [],
    };
    // console.log(this.state);
    console.log("%cMounting - Constructor() - #1", constructorStyle);
  }
  componentDidMount() {
    console.log(
      "%cDid Mount - componentDidMount() - #3 - API",
      didMountingStyle
    );
  }
  componentDidUpdate() {
    console.log(
      "%cDid Update - componentDidUpdate() - After re-render",
      didUpdatingStyle
    );
  }
  componentWillUnmount() {
    console.log(
      "%cWill Unmounting - componentWillUnmout() - Destroyed",
      unmountingStyle
    );
  }
  render() {
    console.log("%cRendering - Render() | Re-render - #2", renderingStyle);
    return (
      <div>
        <h2>Home Page</h2>
        <h4>Counter: {this.state.counter}</h4>
        <button
          className="w-fit p-1 rounded-md cursor-pointer bg-red-600"
          onClick={() =>
            this.setState(() => {
              // console.log(this);
              // console.log(Object.getPrototypeOf(this));
              return { counter: this.state.counter + 1 };
            })
          }
        >
          Increase counter
        </button>
      </div>
    );
  }
}

export default HomePage;
