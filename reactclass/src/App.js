// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useEffect, useState, Fragment } from "react";
import Tabletop from "tabletop";
// import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Tabletop.init({
      key: "1ImfnGQEdcwMpU0TUafI5kqkZsvbMXKBHG8t1XKkdG9w",
      simpleSheet: true
    })
      .then((data) => setData(data))
      .catch((err) => console.warn(err));
  }, []);

  return (
    <>
      <h1>data from google sheets</h1>
      <ul>
        {data.map((item, i) => (
          <Fragment key={i}>
            <li>Group Name - {item.gname}</li>
            <li>Group link - {item.glink}</li>
            <li>Spam - {item.spam}</li>
            <br />
          </Fragment>
        ))}
      </ul>
    </>
  );
}

// https://docs.google.com/spreadsheets/d/e/2PACX-1vR5cessTKMMFmfUAXpnUObXA7aq-KniI3ic47g755BXj1D_OCyT_0jZvXjIVEPn0zocODsgW9bL-y4w/pubhtml