import React from 'react';
import { View, Linking, TouchableOpacity } from 'react-native';
import { Text, Card, Divider } from 'react-native-elements';

const NewsDetail = ({ headline }) => {
  const {
    title,
    description,
    source,
    publishedAt,
    urlToImage,
    url,
  } = headline;
  return (
    <TouchableOpacity useForeground onPress={() => Linking.openURL(url)}>
      <Card
        featuredTitle={title}
        featuredTitleStyle={styles.featuredTitleStyle}
        image={{
          uri: urlToImage,
        }}
      >
        <Text style={{ marginBottom: 10 }}>{description || 'Read More..'}</Text>
        <Divider style={{ backgroundColor: '#dfe6e9' }} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.noteStyle}>{source.name.toUpperCase()}</Text>
          <Text style={styles.noteStyle}>{publishedAt}</Text>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  featuredTitleStyle: {
    marginHorizontal: 5,
    textShadowColor: '#00000f',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 3,
  },
  headerTextStyle: {
    fontSize: 18,
    color: 'white',
  },
  descriptionTextStyle: {
    color: 'gray',
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  noteStyle: {
    margin: 5,
    fontStyle: 'italic',
    color: '#b2bec3',
    fontSize: 10,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
  },
};

export default NewsDetail;
