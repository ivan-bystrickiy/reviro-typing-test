import "./index.css";

import App from "./App";
import React from "react";
import ReactDOM from "react-dom";

const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus ante id elementum feugiat. Proin id velit elit. Sed ac diam ullamcorper, tincidunt mauris ut, fringilla eros. Maecenas lectus diam, vulputate ut mauris non, lobortis varius eros. Duis vulputate, metus eu imperdiet blandit, nunc diam aliquam nisl, id rutrum ex libero quis neque. Maecenas imperdiet eget arcu ac finibus. Fusce eget massa metus. Pellentesque quis vulputate velit, id aliquam est. Donec accumsan massa id risus iaculis, at semper massa cursus. Etiam mattis, justo sit amet accumsan interdum, odio magna consectetur elit, vitae finibus ligula nisi ac sem. Vestibulum sit amet porttitor elit.`;

ReactDOM.render(
  <React.StrictMode>
    <App text={text} />
  </React.StrictMode>,
  document.getElementById("root")
);
