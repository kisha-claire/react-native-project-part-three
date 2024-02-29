import React from 'react';
import { Text, View, Image, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomePage from './WelcomePage';

const Stack = createStackNavigator();

export default class Login extends React.Component {
    state = {
        email: '',
        password: '',
    };

    handleLogin = async () => {
        const { email, password } = this.state;
    
        try {
            const response = await fetch('http://localhost:3000/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
    
            const data = await response.json();
            if (response.ok) {
                this.props.navigation.navigate('WelcomePage', { name: data.data.name });
            } else {
                Alert.alert('Error', data.message);
            }
        } catch (error) {
            console.error('Error logging in:', error);
            Alert.alert('Error', 'An error occurred while logging in. Please try again.');
        }
    };
    

    render() {
        return (
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
                <View style={{ backgroundColor: "#fff", height: "100%" }}>
                    <Image source={require('../images/ini.png')}
                        style={{ width: "100%", height: "30%" }}
                    />
                    <Text>Login</Text>
                    <Text
                        style={{
                            fontSize: 30,

                            alignSelf: "center",

                        }}>Save The World</Text>
                    <Text
                        style={{
                            marginHorizontal: 55,
                            textAlign: "center",
                            marginTop: 5,
                            opacity: 0.4
                        }}>
                        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the
                    </Text>

                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginHorizontal: 55,
                        borderWidth: 2,
                        marginTop: 50,
                        paddingHorizontal: 10,
                        borderColor: "#00716F",
                        borderRadius: 23,
                        paddingVertical: 2
                    }}>
                        <TextInput
                            style={{ paddingHorizontal: 10 }}
                            placeholder='Email'
                            placeholderTextColor="#00716F"
                            onChangeText={(text) => this.setState({ email: text })}
                            value={this.state.email}
                        />

                    </View>

                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginHorizontal: 55,
                        borderWidth: 2,
                        marginTop: 10,
                        paddingHorizontal: 10,
                        borderColor: "#00716F",
                        borderRadius: 23,
                        paddingVertical: 2
                    }}>
                        <TextInput
                            style={{ paddingHorizontal: 10 }}
                            placeholder='Password'
                            placeholderTextColor="#00716F"
                            onChangeText={(text) => this.setState({ password: text })}
                            value={this.state.password}
                            secureTextEntry
                        />

                    </View>

                    <TouchableOpacity
                        onPress={this.handleLogin}
                        style={{
                            marginHorizontal: 55,
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: 30,
                            backgroundColor: "#00716F",
                            paddingVertical: 10,
                            borderRadius: 25
                        }}
                    >
                        <Text style={{
                            color: "white",
                        }}
                        >Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Register')}
                        style={{
                            alignSelf: "center",
                            color: "#00716F",
                            paddingVertical: 30
                        }}>
                        <Text>New User</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}
