import { AppRegistry } from "react-native";
import App from "./App"; // or your entry point component
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => App);
