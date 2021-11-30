import React from "react";
import ReactDOM from "react-dom";
import { SpeechProvider } from "@speechly/react-client";
import "./index.css";
import App from "./App";
import { Provider } from "./context/context";

ReactDOM.render(
  <SpeechProvider appId="eccf98a8-d834-40c2-948b-71f68233f097" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById("root")
);
