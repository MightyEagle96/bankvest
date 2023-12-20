import { NavigationContainer } from "@react-navigation/native";
import LoginPage from "./LoginPage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PublicRoutes } from "./AllScreens";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {PublicRoutes.map((c, i) => (
          <Stack.Screen
            key={i}
            name={c.name}
            component={c.component}
            options={{ headerShown: c.header }}
          />
        ))}
        {/* <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{ headerShown: false }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
