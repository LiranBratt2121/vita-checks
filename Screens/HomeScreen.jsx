import React from 'react';
import { Button, Box, Text, View, Image } from "native-base";
import { Platform } from 'react-native';
import styles from './styles';

const HomeScreen = ({ navigation }) => {
    const buttonTextSpacing = '             '

    const spacingString = Platform.OS !== 'web' ? buttonTextSpacing : '';

    return (
        <Box
            flex={1}
            justifyContent="center"
            alignItems="center"
            backgroundColor="#f0f0f0"
        >
            <Image
                source={require('../assets/icon.png')}
                alt="Vita-Checks Logo"
                size="xl"
                marginBottom={4}
            />
            <View style={styles.container} alignItems="center">
                <Text
                    fontSize="4xl"
                    fontWeight="bold"
                    color="#333"
                    marginBottom={4}
                    textAlign="center"
                >
                    Welcome to Vita-Checks!
                </Text>
                <Text fontSize="lg" color="#555" marginBottom={8} textAlign="center">
                    Discover a world of healthy living and nutrition.
                </Text>

                <Button
                    onPress={() => navigation.navigate('About')}
                    colorScheme="primary"
                    size="lg"
                    width="70%"
                    marginBottom={4}
                    justifyContent="center"
                >
                    {"About-Us" + spacingString}
                </Button>
                <Button
                    onPress={() => navigation.navigate('Login')}
                    colorScheme="info"
                    size="lg"
                    width="70%"
                    marginBottom={4}
                    justifyContent="center"
                >
                    {"Login" + spacingString}
                </Button>
                <Button
                    onPress={() => navigation.navigate('SignUp')}
                    textAlign='center'
                    colorScheme="success"
                    size="lg"
                    width="70%"
                    marginBottom={4}
                    justifyContent="center"
                >
                    {"Sign-Up" + spacingString}
                </Button>
            </View>
        </Box>
    );
};

export default HomeScreen;
