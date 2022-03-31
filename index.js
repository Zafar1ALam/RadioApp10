/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import TextInputPassword from './src/Components/TextInputPassword';
import EditProfile from './src/EditProfile';
import ForgotPassword from './src/ForgotPassword';
import Login from './src/Login';
import Radio from './src/Radio';
import ResetPassword from './src/ResetPassword';
import Setting from './src/Setting';
import SignUp from './src/SignUp';

AppRegistry.registerComponent(appName, () => App);
