import "react-native-gesture-handler";
import "react-native-reanimated";
import "react-native-get-random-values";
import { Provider } from "react-redux";
import { store } from "./src/app/store";
import { LogBox } from "react-native";
import ThemeProvider from "./src/components/context/ThemeProvider";
import Root from "./src/components/root/Root";
import { GestureHandlerRootView } from "react-native-gesture-handler";

LogBox.ignoreAllLogs(); // ignore all annoying warnings.

const App: React.FC = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <ThemeProvider>
          <Root />
        </ThemeProvider>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
