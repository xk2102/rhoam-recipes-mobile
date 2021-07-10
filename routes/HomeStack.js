import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import LogIn from "../screens/LogIn";
import Register from "../screens/Register";

// Home, LogIn & Register automatically have navigation props assigned to it
const screens = {
    Home: {
        screen: Home
    },
    LogIn: {
        screen: LogIn
    },
    Register: {
        screen: Register
    }
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);