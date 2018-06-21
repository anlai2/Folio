import React from 'react';
import { Scene, Router, Actions, Stack } from 'react-native-router-flux';
import CreateForm from './components/CreateForm';
import LoginForm from './components/LoginForm';
import IntroScreen from './screens/IntroScreen';
import CoinList from './components/CoinList';
import PortfolioScreen from './screens/PortfolioScreen';
import AddCoinScreen from './screens/AddCoinScreen';
import AddAssetsScreen from './screens/AddAssetsScreen';
import CoinDetailScreen from './screens/CoinDetailScreen';
import NewsScreen from './screens/NewsScreen';
import ForgotPassword from './screens/ForgotPassword';

const BACK_BUTTON = require('../assets/back.png');

const RouterComponent = () => (
  <Router>
    <Stack key="root" hideNavBar>
      <Scene key="auth">
        <Scene key="intro" hideNavBar component={IntroScreen} />
        <Scene
          key="createUser"
          component={CreateForm}
          navigationBarStyle={{ backgroundColor: 'white' }}
          backButtonImage={BACK_BUTTON}
          backButtonTextStyle={{ color: '#FFF' }}
        />
        <Scene
          key="loginUser"
          component={LoginForm}
          navigationBarStyle={{ backgroundColor: 'white' }}
          backButtonImage={BACK_BUTTON}
          backButtonTextStyle={{ color: '#FFF' }}
        />
        <Scene
          key="forgotPassword"
          component={ForgotPassword}
          navigationBarStyle={{ backgroundColor: 'white' }}
          backButtonImage={BACK_BUTTON}
          backButtonTextStyle={{ color: '#FFF' }}
        />
      </Scene>

      <Scene key="main">
        <Scene
          key="coinList"
          component={CoinList}
          title="Dashboard"
          titleStyle={{
            color: 'white',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          navigationBarStyle={{ backgroundColor: '#FF5636' }}
          leftTitle="News"
          onLeft={() => Actions.newsScreen()}
          leftButtonStyle={{ left: 0 }}
          leftButtonTextStyle={{ color: '#FFF' }}
          rightTitle="Portfolio"
          onRight={() => Actions.portfolioScreen()}
          rightButtonStyle={{ right: 0 }}
          rightButtonTextStyle={{ color: '#FFF' }}
        />
        <Scene
          key="coinDetail"
          component={CoinDetailScreen}
          title="Coin Detail"
          titleStyle={{
            color: 'white',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          navigationBarStyle={{ backgroundColor: '#FF5636' }}
          backButtonImage={BACK_BUTTON}
          backButtonTextStyle={{ color: '#FFF' }}
        />
        <Scene
          key="newsScreen"
          component={NewsScreen}
          onBack={() => Actions.pop()}
          backButtonImage={BACK_BUTTON}
          backButtonTextStyle={{ color: '#FFF' }}
          title="News"
          titleStyle={{
            color: 'white',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          navigationBarStyle={{ backgroundColor: '#FF5636' }}
        />
        <Scene
          key="portfolioScreen"
          component={PortfolioScreen}
          onBack={() => Actions.pop()}
          title="Portfolio"
          titleStyle={{
            color: 'white',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          navigationBarStyle={{ backgroundColor: '#FF5636' }}
          rightTitle="Add Coin"
          onRight={() => Actions.addCoin()}
          rightButtonStyle={{ right: 0 }}
          rightButtonTextStyle={{ color: '#FFF' }}
          backButtonImage={BACK_BUTTON}
          backButtonTextStyle={{ color: '#FFF' }}
        />
        <Scene
          key="addCoin"
          component={AddCoinScreen}
          title="Add Coin"
          titleStyle={{
            color: 'white',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          navigationBarStyle={{ backgroundColor: '#FF5636' }}
          backButtonImage={BACK_BUTTON}
          backButtonTextStyle={{ color: '#FFF' }}
        />
        <Scene
          key="addAsset"
          component={AddAssetsScreen}
          title="Add Assets"
          titleStyle={{
            color: 'white',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          navigationBarStyle={{ backgroundColor: '#FF5636' }}
          backButtonImage={BACK_BUTTON}
          backButtonTextStyle={{ color: '#FFF' }}
        />
      </Scene>
    </Stack>
  </Router>
);

export default RouterComponent;
