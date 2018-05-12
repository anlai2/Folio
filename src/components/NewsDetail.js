import React from 'react';
import { View, Image, Linking, TouchableOpacity } from 'react-native';
import { CardSection } from './common';
import { Text, Button, Card, Divider } from 'react-native-elements';
const NewsDetail = ({ headline }) => {
    const { title, author, description, source, publishedAt, urlToImage, url } = headline;
    const {
        thumbnailStyle,
        headerContentStyle,
        thumbnailContainerStyle,
        descriptionTextStyle,
        headerTextStyle,
        imageStyle
    } = styles;

    return (
        // <Card
        //     containerStyle={{ backgroundColor: '#23213F' }}
        // >
        //     <CardSection>
        //         <View style={headerContentStyle}>
        //             <Text style={headerTextStyle}>{title}</Text>
        //             <View style={{ paddingTop: 5 }}>
        //                 <Text style={{ fontSize: 12, color: 'white' }}>{"Written By: " + author}</Text>
        //             </View>
        //             <View style={{ paddingTop: 10 }}>
        //                 <Text style={descriptionTextStyle}>{description}</Text>
        //             </View>
        //         </View>
        //     </CardSection>

        //     <CardSection>
        //         <Image
        //             style={imageStyle}
        //             source={{ uri: urlToImage }}
        //         />
        //     </CardSection>

        //     <View>
        //         <Button
        //             onPress={() => Linking.openURL(url)}
        //             title="Read More"
        //             buttonStyle={{
        //                 backgroundColor: "rgba(92, 99,216, 1)",
        //                 borderWidth: 0,
        //                 borderRadius: 60,
        //                 paddingHorizontal: 25
        //             }}
        //         />
        //     </View>
        // </Card>

        <TouchableOpacity
            useForeground
            onPress={() => Linking.openURL(url)}
        >
            <Card
                featuredTitle={title}
                featuredTitleStyle={styles.featuredTitleStyle}
                image={{
                    uri: urlToImage
                }}
            >
                <Text style={{ marginBottom: 10 }}>
                    {description || 'Read More..'}
                </Text>
                <Divider style={{ backgroundColor: '#dfe6e9' }} />
                <View
                    style={{ flexDirection: 'row', justifyContent: 'space-between' }}
                >
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
        justifyContent: 'space-around'
    },
    featuredTitleStyle: {
        marginHorizontal: 5,
        textShadowColor: '#00000f',
        textShadowOffset: { width: 3, height: 3 },
        textShadowRadius: 3
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
    noteStyle: {
        margin: 5,
        fontStyle: 'italic',
        color: '#b2bec3',
        fontSize: 10
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
