import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';


const Inscription = () => {
  const [showDateOfBirth, setShowDateOfBirth] = useState(false);
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [gender, setGender] = useState('');

  const toggleDateOfBirth = () => {
    setShowDateOfBirth(!showDateOfBirth);
  };

  const handleGenderSelection = (selectedGender) => {
    setGender(selectedGender);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('./B.png')} style={styles.logoImage} />

      <Text style={styles.logo}>Se connecter</Text>

      <View style={styles.genderContainer}>
        <TouchableOpacity
          style={[
            styles.genderButton,
            gender === 'Homme' ? styles.selectedGenderButton : null,
          ]}
          onPress={() => handleGenderSelection('Homme')}
        >
          <Text
            style={[
              styles.genderButtonText,
              gender === 'Homme' ? styles.selectedGenderButtonText : null,
            ]}
          >
            Homme
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.genderButton,
            gender === 'Femme' ? styles.selectedGenderButton : null,
          ]}
          onPress={() => handleGenderSelection('Femme')}
        >
          <Text
            style={[
              styles.genderButtonText,
              gender === 'Femme' ? styles.selectedGenderButtonText : null,
            ]}
          >
            Femme
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Nom"
          placeholderTextColor="#808080"
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Prénom"
          placeholderTextColor="#808080"
        />
      </View>

      <TouchableOpacity style={styles.dateOfBirthContainer} onPress={toggleDateOfBirth}>
        <Text style={[styles.dateOfBirthLabel, styles.inputText, { color: '#808080', marginBottom: -10, marginTop: 20, }]}>
          Date de naissance
        </Text>
      </TouchableOpacity>

      {showDateOfBirth && (
        <View>
          <View style={styles.dateOfBirthInputView}>
            <TextInput
              style={styles.dateOfBirthInputText}
              placeholder="Année"
              placeholderTextColor="#808080"
              value={year}
              onChangeText={setYear}
            />
          </View>

          <View style={styles.dateOfBirthInputView}>
            <TextInput
              style={styles.dateOfBirthInputText}
              placeholder="Mois"
              placeholderTextColor="#808080"
              value={month}
              onChangeText={setMonth}
            />
          </View>

          <View style={styles.dateOfBirthInputView}>
            <TextInput
              style={styles.dateOfBirthInputText}
              placeholder="Jour"
              placeholderTextColor="#808080"
              value={day}
              onChangeText={setDay}
            />
          </View>
        </View>
      )}

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Numéro de téléphone"
          placeholderTextColor="#808080"
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="E-mail"
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

      <TouchableOpacity style={styles.loginButton}>
        <Text onButtonPress style={handleRegister} {...[styles.loginButtonText, { color: 'white' }]}>S'inscrire</Text>
        
      </TouchableOpacity>

      <View style={styles.bottomSpace} />

      <View style={styles.socialLoginContainer}>
        <TouchableOpacity style={styles.socialLoginButton}>
          <Image
            source={require('./apple-logo.png')}
            style={[styles.socialLoginIcon, { width: 40, height: 40 }]}
          />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialLoginButton, { marginRight: 20 }]}>
          <Image
            source={require('./google-logo.png')}
            style={[styles.socialLoginIcon, { width: 40, height: 40 }]}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Inscription;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  logoImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  logo: {
    fontFamily: 'Roca',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#FB5E01',
  },
  inputView: {
    backgroundColor: '#f2f2f2',
    borderRadius: 25,
    width: '80%',
    height: 50,
    marginBottom: 0,  // Réduire l'espace ici
    alignItems: 'left',
  },
  inputText: {
    fontFamily: 'Roca',
    fontSize: 16,
    height: 50,
    width: '80%',
    color: 'black',
    paddingLeft: 20,
  },
  dateOfBirthContainer: {
    marginBottom: -5,  // Réduire l'espace ici
    marginTop: -5,
    alignItems: 'flex-start',
    width: '80%',
  },
  dateOfBirthLabel: {
    marginBottom: 0,
  },
  dateOfBirthInputView: {
    backgroundColor: '#f2f2f2',
    borderRadius: 25,
    width: '80%',
    height: 50,
    marginBottom: 0,  // Réduire l'espace ici
    alignItems: 'left',
  },
  dateOfBirthInputText: {
    height: 50,
    width: '80%',
    color: 'black',
    paddingLeft: 20,
  },
  loginButton: {
    backgroundColor: '#FB5E01',
    borderRadius: 25,
    height: 50,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  loginButtonText: {
    fontFamily: 'Roca',
    fontSize: 20,
    fontWeight: 'bold',
  },
  continueWithText: {
    fontSize: 16,
    marginBottom: 10,
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  socialLoginButton: {
    marginRight: 10,
  },
  socialLoginIcon: {
    width: 40,
    height: 40,
  },
  signupText: {
    color: 'orange',
    fontSize: 14,
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 0,  // Réduire l'espace ici
    marginTop: -20,
  },
  genderButton: {
    backgroundColor: '#f2f2f2',
    borderRadius: 25,
    width: '48%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedGenderButton: {
    backgroundColor: 'orange',
  },
  genderButtonText: {
    fontFamily: 'Roca',
    fontSize: 16,
    color: 'black',
  },
  selectedGenderButtonText: {
    color: 'white',
  },
  bottomSpace: {
    height: 20, // Ajout d'un espace en bas pour permettre le scrolling
  },
});
