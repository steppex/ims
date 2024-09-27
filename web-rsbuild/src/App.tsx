import React from "react";
import { ConfigProvider, Button } from "antd";

import "./App.css";

const App: React.FC = () => (
  <ConfigProvider theme={{ token: { colorPrimary: "#00b96b" } }}>
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <Button id="btn" type="primary">
        Button
      </Button>
    </div>
  </ConfigProvider>
);

export default App;
