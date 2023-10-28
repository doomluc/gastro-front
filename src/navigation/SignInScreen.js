import {KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useState} from "react";
import axios from '../api/axios'

export function SignInScreen ({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [jwt, setJwt] = useState(null);

    const auth = async ()=> {
        try {
            const response = await axios
                .post('/api/v1/auth/authenticate', {email: email, password: password});
            console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder={"Email"}
                    value = {email}
                    onChangeText={text => {setEmail(text)}}
                    style={styles.input}/>
                <TextInput
                    placeholder={"Password"}
                    value = {password}
                    onChangeText={text => {setPassword(text)}}
                    style={styles.input}
                    secureTextEntry
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={auth}
                                  style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("SignUp")}
                                  style={[styles.button, styles.buttonOutline]}>
                    <Text style={styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer : {
        width: '80%',
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5
    },
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2
    },
    buttonText: {
        color: 'white',
        fontWeight: 700,
        fontSize: 16,
    },
    buttonOutlineText: {
        color: '#0782F9',
        fontWeight: 700,
        fontSize: 16,
    }
});