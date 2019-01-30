//import liraries
import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

// create a component
class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                style= {styles.texto}
                onChangeText= { this.props.cambiarTexto}
                placeholder="Escribe tu texto"
                onSubmitEditing = { this.props.agregar}
                value = { this.props.texto }
                />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: 'center',
        backgroundColor: '#00FF00',
    },
    texto: {
        paddingHorizontal: 36,
        fontSize: 24,
    }
});

//make this component available to the app
export default Header;
