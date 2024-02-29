import React from 'react';
import {Text, View, Image, TextInput, TouchableOpacity, ScrollView, Alert} from 'react-native';

export default class Register extends React.Component {
    state = {
        name: '',
        email: '',
        phone: '',
        password: '',
    };

    handleRegister = async () => {
        try {
            const response = await fetch('http://10.0.2.2:3000/api/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: this.state.name,
                    email: this.state.email,
                    phone: this.state.phone,
                    password: this.state.password,
                }),
            });

            const data = await response.json();
            if (response.ok) {
                Alert.alert('Success', data.message);
            } else {
                Alert.alert('Error', data.message);
            }
        } catch (error) {
            console.error('Error registering user:', error);
            Alert.alert('Error', 'An error occurred while registering. Please try again.');
        }
    };

    render() {
        return (
            <ScrollView style={{backgroundColor: "#fff"}}>
                {/* Your existing UI code here */}
                {/* TextInput fields for name, email, phone, password */}
                <TextInput
                    placeholder='Name'
                    onChangeText={(text) => this.setState({name: text})}
                    value={this.state.name}
                />
                <TextInput
                    placeholder='Email'
                    onChangeText={(text) => this.setState({email: text})}
                    value={this.state.email}
                />
                <TextInput
                    placeholder='Phone'
                    onChangeText={(text) => this.setState({phone: text})}
                    value={this.state.phone}
                />
                <TextInput
                    placeholder='Password'
                    onChangeText={(text) => this.setState({password: text})}
                    value={this.state.password}
                    secureTextEntry={true}
                />
                {/* Register button with onPress event handler */}
                <TouchableOpacity
                    style={{
                        marginHorizontal: 55,
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: 30,
                        backgroundColor: "#00716F",
                        paddingVertical: 10,
                        borderRadius: 25
                    }}
                    onPress={this.handleRegister}
                >
                    <Text style={{color: "white"}}>Register</Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}
