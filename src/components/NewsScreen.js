import React, { Component } from 'react';
import { ScrollView, View, RefreshControl } from 'react-native';
import axios from 'axios';
import { Spinner } from './common';
import NewsDetail from './NewsDetail';

class NewsScreen extends Component {
    state = { headlines: [], loading: false, refreshing: false };

    componentWillMount() {
      this.fetchNews();
    }

    fetchNews = () => {
      const apiKey = '7bc09cc2fa8b4f6d8190d17dca63b344';
      this.setState({ loading: true });
      axios.get(`https://newsapi.org/v2/everything?sources=crypto-coins-news&apiKey=${apiKey}`)
        .then(response => this.setState({ headlines: response.data.articles }))
        .then(() => this.setState({ loading: false }));
    }

    refreshNews() {
      const apiKey = '7bc09cc2fa8b4f6d8190d17dca63b344';
      this.setState({ refreshing: true });
      axios.get(`https://newsapi.org/v2/everything?sources=crypto-coins-news&apiKey=${apiKey}`)
        .then(response => this.setState({ headlines: response.data.articles }))
        .then(() => this.setState({ refreshing: false }));
    }

    renderNews() {
      return this.state.headlines.map(headline =>
        <NewsDetail key={headline.title} headline={headline} />);
    }

    render() {
      if (this.state.loading) {
        return (
          <View style={{
                    flex: 1,
                    backgroundColor: 'white',
                }}
          >
            <View style={{ flex: 1, height: 250 }}>
              <Spinner />
            </View>
          </View>
        );
      }
      return (
        <View style={{
                    flex: 1,
                    backgroundColor: 'white',
                }}
        >
          <View style={{ backgroundColor: 'white' }}>
            <ScrollView
              refreshControl={
                <RefreshControl
                  refreshing={this.state.refreshing}
                  onRefresh={() => this.refreshNews()}
                />
                        }
            >
              {this.renderNews()}
            </ScrollView>
          </View>
        </View>
      );
    }
}

export default NewsScreen;
