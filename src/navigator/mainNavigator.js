import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignIn21173931Navigator from '../features/SignIn21173931/navigator';
import SignIn22173930Navigator from '../features/SignIn22173930/navigator';
import SignIn23173929Navigator from '../features/SignIn23173929/navigator';
import SignIn24173928Navigator from '../features/SignIn24173928/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
SignIn21173931: { screen: SignIn21173931Navigator },
SignIn22173930: { screen: SignIn22173930Navigator },
SignIn23173929: { screen: SignIn23173929Navigator },
SignIn24173928: { screen: SignIn24173928Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
