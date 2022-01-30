import logo from "./logo.svg";
import "./App.css";

import Landing from "./screens/Landing/landing";
import Layout from "./components/Layout/layout";
import Login from "./screens/login/login";

function App() {
  return (
    <Layout>
      <Landing />
    </Layout>
  );
}

export default App;
