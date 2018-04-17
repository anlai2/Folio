import React from 'react';
import { Linking, Image } from 'react-native';
import { Scene, Router, Actions, Stack } from 'react-native-router-flux';
import CreateForm from './components/CreateForm';
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
	      			key="createUser" 
	      			component={CreateForm} 
	      			title="Create Account"
					backTitle="Back"
					titleStyle={{ color: "white" }} 
	      			navigationBarStyle={{ backgroundColor: '#2A033E'}} 
	      			backButtonImage={require('../assets/back.png')}
	    			backButtonTextStyle={{ color: '#FFF' }}/>
	      		<Scene 
	      			key="loginUser" 
	      			component={LoginForm} 
	      			// title="MoonShot"
					// titleStyle={{ color: "white" }} 
	      			navigationBarStyle={{ paddingTop: 20, backgroundColor: '#2A033E'}} 
	      			backButtonImage={require('../assets/back.png')}
	    			backButtonTextStyle={{ color: '#FFF' }}/>
	      	</Scene>
            
            <Scene key="main">
                <Scene
                    key="coinList"
                    component={CoinList}
					title="Dashboard      "
					titleStyle={{ color: "white", alignItems: "center", justifyContent:'center' }} 
					navigationBarStyle={{ paddingTop: 15, backgroundColor: '#4F3170'}}
                />
            </Scene>
      	</Stack>
    </Router>
  );
};

export default RouterComponent;