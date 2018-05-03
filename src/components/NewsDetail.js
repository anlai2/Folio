import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import { CardSection } from './common';
import { Card, Button } from 'react-native-elements';
const NewsDetail = ({ headline }) => {
    const { title, description, urlToImage, url } = headline;
    const {
        thumbnailStyle,
        headerContentStyle,
        thumbnailContainerStyle,
        descriptionTextStyle,
        headerTextStyle,
        imageStyle
    } = styles;

    return (
        <Card
            containerStyle={{ backgroundColor: '#23213F' }}
        >
            <CardSection>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text style={descriptionTextStyle}>{description}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image
                    style={imageStyle}
                    source={{ uri: urlToImage }}
                />
            </CardSection>

            <CardSection>
                <Button 
                onPress={() => Linking.openURL(url)}
                title="Read More"
                buttonStyle={{
                    backgroundColor: "rgba(92, 99,216, 1)",
                    borderWidth: 0,
                    borderRadius: 60,
                    paddingHorizontal: 25
                }}
                />
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18,
        color: 'white'
    },
    descriptionTextStyle: {
        color: 'gray'
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default NewsDetail;
