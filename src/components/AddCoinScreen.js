import React, { Component } from 'react';
import { Text, View, Picker } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { LinearGradient } from 'expo';
import { CardSection } from './common';
import { Button, Card } from 'react-native-elements';

class AddCoinScreen extends Component {
    render() {
        return (
            <View style={styles.viewContainer}>
                <LinearGradient
                    colors={['#452768', '#171032', '#04081B']}>
                    <Card
                        containerStyle={styles.cardContainer}
                    >
                        <View style={{ backgroundColor: "#FFF", padding: 10, alignItems: "center" }}>
                            <Text style={{fontWeight: 'bold' }}>
                                Pick a Coin
                            </Text>
                            <Picker>
                            </Picker>
                        </View>
                    </Card>
                    <CardSection>
                        <Button
                            onPress={() => Actions.addCoin()}
                            title="Add Coin "
                            titleStyle={{ fontWeight: 'bold' }}
                            buttonStyle={{
                                backgroundColor: "rgba(92, 99,216, 1)",
                                width: 300,
                                height: 45,
                                borderColor: "transparent",
                                borderWidth: 0,
                                borderRadius: 5
                            }}
                            containerStyle={{ marginTop: 20 }}
                        />
                    </CardSection>
                </LinearGradient>
            </View>
        );
    }
}

const styles = {
    viewContainer: {
        flex: 1,
        backgroundColor: "#2A033E"
    },
    cardContainer: {
        backgroundColor: 'rgba(92, 99,216, 1)',
        borderColor: '#000'
    }
}

export default AddCoinScreen;