import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Pressable, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomePage = () => {
  const navigation = useNavigation();

  const handleSignUpPress = () => {
    navigation.navigate('Inscription');
  };

  const handleSignInPress = () => {
    navigation.navigate('Profile');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('./B.png')} style={styles.logoImage} />
      <Text style={styles.logo}>Se connecter</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Identifiant"
          placeholderTextColor="#808080"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Mot de passe"
          placeholderTextColor="#808080"
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgotPasswordText}>Mot de passe oublié ?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={handleSignInPress}>
        <Text style={[styles.loginButtonText, { color: 'white' }]}>Se connecter</Text>
      </TouchableOpacity>
      <Text style={styles.continueWithText}>Continuer avec</Text>
      <View style={styles.socialLoginContainer}>
        <TouchableOpacity style={styles.socialLoginButton}>
          <Image
            source={require('./apple-logo.png')}
            style={styles.socialLoginIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialLoginButton}>
          <Image
            source={require('./google-logo.png')}
            style={styles.socialLoginIcon}
          />
        </TouchableOpacity>
      </View>

      <Pressable onPress={handleSignUpPress}>
        <Text style={styles.signupText}>Pas encore de compte ? S'inscrire</Text>
      </Pressable>
      <View style={styles.bottomSpace} />
    </ScrollView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 50,
  },
  logoImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  logo: {
    fontFamily: 'Roca',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 20,
    color: '#FB5E01',
  },
  inputView: {
    backgroundColor: '#f2f2f2',
    borderRadius: 25,
    width: '70%',
    height: 50,
    marginBottom: 20,
    alignItems: 'center',
  },
  inputText: {
    height: 50,
    width: '100%',
    color: 'black',
    paddingLeft: 20,
  },
  forgotPasswordText: {
    color: 'grey',
    fontSize: 12,
    marginTop: 0,
  },
  loginButton: {
    backgroundColor: '#FB5E01',
    borderRadius: 25,
    height: 50,
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  loginButtonText: {
    fontFamily: 'Roca',
    fontSize: 16,
    fontWeight: 'bold',
  },
  continueWithText: {
    fontSize: 14,
    marginBottom: 20,
    marginTop: 10,
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  socialLoginButton: {
    marginRight: 10,
    marginBottom: -20,
  },
  socialLoginIcon: {
    width: 30,
    height: 30,
  },
  signupText: {
    color: '#FB5E01',
    fontSize: 14,
    marginTop: 30,
  },
  bottomSpace: {
    height: 50,
  },
});
