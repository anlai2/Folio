import React from 'react';
import { Linking, Image } from 'react-native';
import { Scene, Router, Actions, Stack } from 'react-native-router-flux';
import CreateForm from './components/CreateForm';
import LoginForm from './components/LoginForm';
import IntroScreen from './components/IntroScreen';
import CoinList from './components/CoinList';
import PortfolioScreen from './components/PortfolioScreen';
import AddCoinScreen from './components/AddCoinScreen';

const RouterComponent = () => {
	return (
		<Router>
			<Stack key="root" hideNavBar>
				<Scene key="auth">
					<Scene
						key="intro"
						component={IntroScreen}
						navigationBarStyle={{ backgroundColor: '#2A033E' }}
					/>
					<Scene
						key="createUser"
						component={CreateForm}
						backTitle="Back"
						navigationBarStyle={{ backgroundColor: '#2A033E' }}
						backButtonImage={require('../assets/back.png')}
						backButtonTextStyle={{ color: '#FFF' }} />
					<Scene
						key="loginUser"
						component={LoginForm}
						// title="MoonShot"
						// titleStyle={{ color: "white" }} 
						navigationBarStyle={{ backgroundColor: '#2A033E' }}
						backButtonImage={require('../assets/back.png')}
						backButtonTextStyle={{ color: '#FFF' }}
					/>
				</Scene>

				<Scene key="main">
					<Scene
						key="coinList"
						component={CoinList}
						title="Dashboard"
						titleStyle={{ color: "white", alignItems: "center", justifyContent: 'center' }}
						navigationBarStyle={{ backgroundColor: '#4F3170' }}
						rightButtonImage={require('../assets/portfolio.png')}
						rightTitle="Portfolio"
						onRight={() => Actions.portfolioScreen()}
						rightButtonTextStyle={{ color: '#FFF' }}
					/>
					<Scene
						key="portfolioScreen"
						component={PortfolioScreen}
						onBack={() => Actions.pop()}
						title="Portfolio"
						titleStyle={{ color: "white", alignItems: "center", justifyContent: 'center' }}
						navigationBarStyle={{ backgroundColor: '#4F3170' }}
						rightTitle="Add Coin"
						onRight={() => Actions.addCoin()}
						rightButtonTextStyle={{ color: '#FFF' }}
					/>
					<Scene
						key="addCoin"
						component={AddCoinScreen}
						title="Add Coin"
						titleStyle={{ color: "white", alignItems: "center", justifyContent: 'center' }}
						navigationBarStyle={{ backgroundColor: '#4F3170' }}
					/>
				</Scene>
			</Stack>
		</Router>
	);
};

export default RouterComponent;