import React from "react";
import { createAppContainer, createSwitchNavigator, createStackNavigator, createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import Splash from './pages/Splash'
import Main from './pages/Main'
import PSW from './pages/PSW'
import User from './pages/RegisterStyled/User'
import Nutri from './pages/RegisterStyled/Nutri'
import Principal from './pages/paciente/principal'
import Data from './pages/paciente/Data'
import Plano from './pages/paciente/Plano_alimentar'
import Chat from './pages/paciente/chat'
import Contato from './pages/paciente/chat/Contato'
import Grafico from './pages/paciente/Grafico'

import Ionicons from "react-native-vector-icons/Ionicons";
// console.disableYellowBox = true;
const Routes = createAppContainer(
  createSwitchNavigator({
    Splash: { screen: Splash },
    Main: {
      screen: createStackNavigator({
        Main: { screen: Main },
        PSW: { screen: PSW },
        User: { screen: User },
        Nutri: { screen: Nutri },
        Principal: {
          screen: createBottomTabNavigator({
            Principal: { screen: Principal },
            Data: { screen: Data },
            Plano: { screen: Plano },
            Chat: {
              screen: createMaterialTopTabNavigator({
                Contato: { screen: Contato },
                Chat: { screen: Chat }
              })
            },
            Grafico: { screen: Grafico },
          }, {
              defaultNavigationOptions: ({ navigation }) => ({
                tabBarIcon: ({ focused, horizontal, tintColor }) => {
                  const { routeName } = navigation.state;
                  let IconComponent = Ionicons;
                  let icoName;

                  if (routeName === "Principal") {
                    icoName = "md-home";
                  } else if (routeName === "Data") {
                    icoName = "md-person";
                  } else if (routeName === "Plano") {
                    icoName = "md-list";
                  } else if (routeName === "Chat") {
                    icoName = "md-chatbubbles";
                  } else if (routeName === "Grafico") {
                    icoName = "md-clipboard";
                  }
                  return <IconComponent name={icoName} size={24} color={tintColor} />;
                }
              }),
              tabBarOptions: {
                activeTintColor: "#000",
                inactiveTintColor: "#ccc",
                showLabel: false
              },
            },
            {
              initialRouteName: "Principal",
            })
        }

      }, {
          defaultNavigationOptions: {
            headerStyle: {
              backgroundColor: "#444A5A"
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold"
            }
          }
        }),
    },
  }, {
      initialRouteName: 'Splash',
    })
)

export default Routes;