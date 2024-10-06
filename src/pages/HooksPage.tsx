// import { useEffect, useState } from "react";
// import { renderingStyle, unmountingStyle } from "../Styles";

// const HooksPage = () => {
//   const [counter, setCounter] = useState(0);
//   useEffect(() => {
//     fetch("https://dummyjson.com/products")
//       .then((res) => res.json())
//       .then(console.log);
//     // ** Cleanup
//     // return () => {
//     //   console.log(
//     //     "%cWill Unmounting - componentWillUnmout() #2 - Destroyed #2",
//     //     unmountingStyle
//     //   );
//     // };
//   }, []);
//   useEffect(() => {
//     console.log("Hello UseEffect ❤️");
//     // ** Cleanup
//     return () => {
//       console.log(
//         "%cWill Unmounting - componentWillUnmout() - Destroyed",
//         unmountingStyle
//       );
//     };
//   }, [counter]);
//   console.log("%cRendering - Render() | Re-render - #2", renderingStyle);
//   return (
//     <div>
//       <h2>Counter: {counter}</h2>
//       <button
//         className="w-fit p-1 rounded-md cursor-pointer bg-red-600"
//         onClick={() => setCounter((prev) => prev + 1)}
//       >
//         Increase Counter
//       </button>
//     </div>
//   );
// };

// export default HooksPage;

// *** USING ABORT CONTROLLER (Request Cancelation) *** //

import { useEffect, useState } from "react";

const HooksPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    (async () => {
      try {
        const response = await (
          await fetch("https://dummyjson.com/products", {
            signal,
          })
        ).json();
        // const jsonData = await response.json();
        setProducts(response.products);
        // console.log(signal);
      } catch (error) {
        console.log(error);
      }
    })();

    return () => {
      controller.abort();
      // console.log(signal);
    };
  }, []);
  return (
    <div>
      <h2>useEffect Hook</h2>
      {products.length ? (
        products.map(({ id, title }: { id: number; title: string }) => (
          <p key={id}>{title}</p>
        ))
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default HooksPage;
