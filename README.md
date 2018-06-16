# Folio
<h3 align="center">
  Folio
</h3>

<p align="center">
  Track your cryptocurrency portfolio value cross exchanges
</p>

<img src="assets/folio.png" width="270" />

### [Demo - Try it on Expo](https://expo.io/@anlai2/Folio)

## Features

- Users can track their cryptocurrency assets if they are being held cross exchange platforms or in a hardware wallet.
- They can also view current news events in cryptocurrency either through recent tweets or with the Crypto Coin News API
- Folio also allows users to track a portfolio that they might not exactly own. For example, if someone wanted to know how much USD they would hold if they invested x amount today.

### Screenshots

<div style={{display: flex; flex-direction: row}}>
  <img src="screenshots/ss1.png" width="270" />
  <img src="screenshots/ss2.png" width="270" />
  <img src="screenshots/ss3.png" width="270" />
</div>
<div style={{display: flex; flex-direction: row; paddingTop: 10}}>
  <img src="screenshots/ss4.png" width="270" />
  <img src="screenshots/ss5.png" width="270" />
  <img src="screenshots/ss6.png" width="270" />
</div>
<div style={{display: flex; flex-direction: row; paddingTop: 10}}>
  <img src="screenshots/ss7.png" width="270" />
  <img src="screenshots/ss8.png" width="270" />
  <img src="screenshots/ss9.png" width="270" />
</div>

## TODO

Many issues that will occur will be opened on this github page, below are milestones/enhancements

- [ ] RNRF to React-Navigation
  - Use createBottomTabNavigator to route through news, portfolio, and dashboard screens.

- [x] API’s used
  * [CoinMarketCap.com API](https://coinmarketcap.com/api/documentation/v1/) for latest coin prices
  * [Twilio API](https://www.twilio.com/docs/api) for OTP authentication 
  * [Crypto Coins News API](https://newsapi.org/s/crypto-coins-news-api) for latest cryptocurrency news

- [ ] Start building prototype
  - [ ] Fix android UI design bugs
  - [ ] Get feedback
  - [ ] Prepare deployment to stores (Due by 08/27/18)

- [ ] Create a React Web App with a similiar backend 
  - [ ] Move from firebase to MongoDB
  - [ ] Create REST API for backend use (GET/POST/DELETE portfolio)
  
- [ ] Add visualization data such as graphs and pie charts using historical data.
  - [ ] Move CMC.com API to a more advanced API that has live and historical prices.
  - [ ] Requires a backend and database

## Feedback

Open an issue, make a PR, or send me an email at anlaics2@gmail.com
