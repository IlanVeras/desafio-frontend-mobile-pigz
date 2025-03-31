import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import InputLogin from '@/components/Login/InputLogin';
import LinkLogin from '@/components/Login/LinkLogin';
import PasswordLogin from '@/components/Login/PasswordLogin'
import MyButton from '@/components/MyButton';
import PigzImageLogin from '@/components/Login/PigzImageLogin';
import CreateAcc from '@/components/Login/CreateAcc';
import GoogleLogin from '@/components/Login/GoogleLogin';
import EntrarTrace from '@/components/Login/EntrarTrace';

export default function Login() {
    const [email,setEmail] = React.useState('')
    const [senha,setSenha] = React.useState('')
    return (
      <ScrollView>
          <View style={styles.divMain}>
            <PigzImageLogin/>
            <Text style={styles.header1}>Pigz entregadores</Text>
            <Text style={styles.header2}>Login</Text>
            <InputLogin textValue={email} setTextValue={setEmail}/>
            <PasswordLogin textValue={senha} setTextValue={setSenha}/>
            <LinkLogin textValue={"Esqueci minha senha"}/>
            <MyButton textValue={"Entrar"} route={'/home'} img={''}/>
            <CreateAcc/>
            <EntrarTrace/>
            <GoogleLogin/>
          </View>
      </ScrollView>
    );
  }

const styles = StyleSheet.create({
    divMain: {
        margin: 24
    },
    header1: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 8,
    },
    header2: {
        fontSize: 16,
        color: "#222222",
        fontWeight: 'bold',
        marginTop: 37,
    },
})
