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
  products: [];
}

class ProductsPage extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
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
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ products: data.products });
        // console.log(this.state.products);
      });
  }
  componentDidUpdate() {
    console.log(
      "%cDid Update - componentDidUpdate() - After re-render",
      didUpdatingStyle
    );
  }
  componentWillUnmount(): void {
    console.log(
      "%cWill Unmounting - componentWillUnmout() - Destroyed",
      unmountingStyle
    );
  }
  render() {
    console.log("%cRendering - Render() | Re-render - #2", renderingStyle);
    return (
      <div>
        <h2>ProductsPage</h2>
        {this.state.products.map(
          ({ id, title }: { id: string; title: string }) => (
            <h3 key={id}>{title}</h3>
          )
        )}
      </div>
    );
  }
}

export default ProductsPage;
