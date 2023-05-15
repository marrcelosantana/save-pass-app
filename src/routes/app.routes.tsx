import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import { ServiceDTO } from "@models/ServiceDTO";

import { Home } from "@screens/Home";
import { Register } from "@screens/Register";
import { Update } from "@screens/Update";

type AppRoutes = {
  home: undefined;
  register: undefined;
  update: { service: ServiceDTO };
};

export type AppNavigatorRoutesProps = NativeStackNavigationProp<AppRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AppRoutes>();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="register" component={Register} />
      <Screen name="update" component={Update} />
    </Navigator>
  );
}
