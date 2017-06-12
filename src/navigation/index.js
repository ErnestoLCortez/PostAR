import React from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginScreen from '../containers/LoginScreen';

export default RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene key="login" component={LoginScreen} />
      </Scene>
    </Router>
  )
}