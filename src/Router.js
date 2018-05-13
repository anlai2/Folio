import React from 'react';
import { Linking, Image } from 'react-native';
import { Scene, Router, Actions, Stack } from 'react-native-router-flux';
import CreateForm from './components/CreateForm';
import LoginForm from './components/LoginForm';
import IntroScreen from './components/IntroScreen';
import CoinList from './components/CoinList';
import PortfolioScreen from './components/PortfolioScreen';
import AddCoinScreen from './components/AddCoinScreen';
import AddAssetsScreen from './components/AddAssetsScreen';
import CoinDetailScreen from './components/CoinDetailScreen';
import NewsScreen from './components/NewsScreen';
import PhoneAuthScreen from './components/PhoneAuthScreen';

const RouterComponent = () => {
	return (
		<Router>
			<Stack key="root" hideNavBar>
				<Scene key="auth">
					<Scene
						key="intro" hideNavBar
						component={IntroScreen}
						// navigationBarStyle={{ backgroundColor: 'white' }}
					/>
					<Scene
						key="createUser"
						component={CreateForm}
						navigationBarStyle={{ backgroundColor: 'white' }}
						backButtonImage={require('../assets/back.png')}
						backButtonTextStyle={{ color: '#FFF' }} />
					<Scene
						key="loginUser"
						component={LoginForm}
						// title="MoonShot"
						// titleStyle={{ color: "white" }} 
						navigationBarStyle={{ backgroundColor: '#FF5636' }}
						backButtonImage={require('../assets/back.png')}
						backButtonTextStyle={{ color: '#FFF' }}
					/>
					<Scene
						key="phoneAuth"
						component={PhoneAuthScreen}
						navigationBarStyle={{ backgroundColor: '#FF5636' }}
						backButtonImage={require('../assets/back.png')}
						backButtonTextStyle={{ color: '#FFF' }} />
				</Scene>

				<Scene key="main">
					<Scene
						key="coinList"
						component={CoinList}
						title="Dashboard"
						titleStyle={{ color: "white", alignItems: "center", justifyContent: 'center' }}
						navigationBarStyle={{ backgroundColor: '#FF5636' }}
						leftTitle="News"
						onLeft={() => Actions.newsScreen()}
						leftButtonTextStyle={{ color: '#FFF' }}
						rightButtonImage={require('../assets/portfolio.png')}
						rightTitle="Portfolio"
						onRight={() => Actions.portfolioScreen()}
						rightButtonTextStyle={{ color: '#FFF' }}
					/>
					<Scene
						key="coinDetail"
						component={CoinDetailScreen}
						title="Coin Detail"
						titleStyle={{ color: "white", alignItems: "center", justifyContent: 'center' }}
						navigationBarStyle={{ backgroundColor: '#FF5636' }}
						backButtonImage={require('../assets/back.png')}
						backButtonTextStyle={{ color: '#FFF' }}
					/>
					<Scene
						key="newsScreen"
						component={NewsScreen}
						onBack={() => Actions.pop()}
						backButtonImage={require('../assets/back.png')}
						backButtonTextStyle={{ color: '#FFF' }}
						title="News"
						titleStyle={{ color: "white", alignItems: "center", justifyContent: 'center' }}
						navigationBarStyle={{ backgroundColor: '#FF5636' }}
					/>
					<Scene
						key="portfolioScreen"
						component={PortfolioScreen}
						onBack={() => Actions.pop()}
						title="Portfolio"
						titleStyle={{ color: "white", alignItems: "center", justifyContent: 'center' }}
						navigationBarStyle={{ backgroundColor: '#FF5636' }}
						rightTitle="Add Coin"
						onRight={() => Actions.addCoin()}
						rightButtonTextStyle={{ color: '#FFF' }}
						backButtonImage={require('../assets/back.png')}
						backButtonTextStyle={{ color: '#FFF' }}
					/>
					<Scene
						key="addCoin"
						component={AddCoinScreen}
						title="Add Coin"
						titleStyle={{ color: "white", alignItems: "center", justifyContent: 'center' }}
						navigationBarStyle={{ backgroundColor: '#FF5636' }}
						backButtonImage={require('../assets/back.png')}
						backButtonTextStyle={{ color: '#FFF' }}
					/>
					<Scene
						key="addAsset"
						component={AddAssetsScreen}
						title="Add Assets"
						titleStyle={{ color: "white", alignItems: "center", justifyContent: 'center' }}
						navigationBarStyle={{ backgroundColor: '#FF5636' }}
						backButtonImage={require('../assets/back.png')}
						backButtonTextStyle={{ color: '#FFF' }}
					/>
				</Scene>
			</Stack>
		</Router>
	);
};

export default RouterComponent;