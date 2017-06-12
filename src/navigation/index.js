import React from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginScreen from '../containers/LoginScreen';
import CameraView from '../containers/CameraView';

export default RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene key="login" component={LoginScreen} />
      </Scene>
      <Scene key="main">
        <Scene key="cameraView" component={CameraView} />
      </Scene>
    </Router>
  )
}