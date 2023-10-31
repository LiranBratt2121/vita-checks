import React, { useState } from 'react';
import { Text, View, Input, Button } from 'native-base';

const SignUpScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {
        // Handle sign-up logic here
    };

    return (
        <View flex={1} alignItems="center" justifyContent="center" p={4}>
            <View style={{ width: '80%' }}>
                <Text fontSize="3xl" fontWeight="bold" mb={4}>
                    Sign Up
                </Text>
                <Input
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    variant="underlined"
                    mb={4}
                />
                <Input
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    variant="underlined"
                    type="password"
                    mb={4}
                />
                <Button onPress={handleSignUp} colorScheme="primary" size="lg">
                    Sign Up
                </Button>
            </View>
        </View>
    );
};

export default SignUpScreen;
