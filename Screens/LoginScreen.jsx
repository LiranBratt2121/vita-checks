import React, { useState } from 'react';
import { Text, View, Input, Button } from 'native-base';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Handle login logic here
    };

    return (
        <View flex={1} alignItems="center" justifyContent="center" p={4}>
            <View style={{ width: '80%' }}>
                <Text fontSize="3xl" fontWeight="bold" mb={4}>
                    Login
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
                <Button onPress={handleLogin} colorScheme="primary" size="lg">
                    Login
                </Button>
            </View>
        </View>
    );
};

export default LoginScreen;
