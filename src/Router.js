import React from 'react';
import { Linking, Image } from 'react-native';
import { Scene, Router, Actions, Stack } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import IntroScreen from './components/IntroScreen';
import CoinList from './components/CoinList';

const RouterComponent = () => {
  return (
    <Router>
    	<Stack key="root" hideNavBar>
    		<Scene key="auth">
	    		<Scene 
	    			key="intro" 
	    			component={IntroScreen} 
	    			navigationBarStyle={{ backgroundColor: '#2A033E'}} 
	    			initial/>
	      		<Scene 
	      			key="loginUser" 
	      			component={LoginForm} 
	      			title="MoonShot"
	      			backTitle="Back" 
	      			navigationBarStyle={{ backgroundColor: '#2A033E'}} 
	      			backButtonImage={require('../assets/back.png')}
	    			backButtonTextStyle={{ color: '#000' }}/>
	      	</Scene>
            
            <Scene key="main">
                <Scene
                    key="coinList"
                    component={CoinList}
                    title="MoonShot"
                    navigationBarStyle={{ backgroundColor: '#2A033E'}}
                />
            </Scene>
      	</Stack>
    </Router>
  );
};

export default RouterComponent;