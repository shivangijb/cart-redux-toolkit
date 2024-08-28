import "./App.css";
import Products from "./components/Products";
import { Provider } from "react-redux";
import appStore from "./redux/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <div className="App">
        <Products />
      </div>
    </Provider>
  );
}

export default App;
