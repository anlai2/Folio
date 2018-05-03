import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import NewsDetail from './NewsDetail';

class NewsScreen extends Component {
  state = { headlines: [] };

  componentWillMount() {
    const apiKey = '7bc09cc2fa8b4f6d8190d17dca63b344';
    axios.get(`https://newsapi.org/v2/top-headlines?sources=crypto-coins-news&apiKey=${apiKey}`)
      .then(response => this.setState({ headlines: response.data.articles }));
  }

  renderNews() {
    return this.state.headlines.map(headline =>
      <NewsDetail key={headline.title} headline={headline} />
    );
  }

  render() {
    console.log(this.state);

    return (
      <ScrollView>
        {this.renderNews()}
      </ScrollView>
    );
  }
}

export default NewsScreen;