import "react-native-gesture-handler";
import "react-native-reanimated";
import { Provider } from "react-redux";
import { store } from "./src/app/store";
import { LogBox } from "react-native";
import ThemeProvider from "./src/components/context/ThemeProvider";
import Root from "./src/components/root/Root";

LogBox.ignoreAllLogs(); // ignore all annoying warnings.

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Root />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
