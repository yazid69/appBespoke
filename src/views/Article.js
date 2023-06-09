import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';

const AddArticle = ({ navigation }) => {
  const [articleTitle, setArticleTitle] = useState('');
  const [articleDescription, setArticleDescription] = useState('');
  const [articleImage, setArticleImage] = useState('');
  const [personName, setPersonName] = useState('');
  const [category, setCategory] = useState('');

  const handleAddArticle = () => {
    // Ici, vous pouvez ajouter la logique pour ajouter un nouvel article
    // Utilisez les valeurs des états pour accéder aux données saisies par l'utilisateur
    const newArticle = {
      title: articleTitle,
      description: articleDescription,
      image: articleImage,
      personName: personName,
      category: category,
    };
    // Faites quelque chose avec les données de l'article, par exemple, envoyez-les à votre API
    console.log(newArticle);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.greetingText}>Bonjour, [Prénom]</Text>
          <View style={styles.profileIconContainer}>
            <Image source={require('./profile-icon.png')} style={styles.profileIcon} />
            <Text style={styles.profileText}>Profile</Text>
          </View>
        </View>

        <ScrollView horizontal contentContainerStyle={styles.categoriesContainer}>
          <View style={styles.category}>
            <Text style={styles.categoryText}>Street Wear</Text>
          </View>
          <View style={styles.category}>
            <Text style={styles.categoryText}>Old Rich</Text>
          </View>
          <View style={styles.category}>
            <Text style={styles.categoryText}>Bobo</Text>
          </View>
          <View style={styles.category}>
            <Text style={styles.categoryText}>Luxe</Text>
          </View>
        </ScrollView>

        <ScrollView horizontal contentContainerStyle={styles.photosContainer}>
          <View style={styles.photo}></View>
          <View style={styles.photo}></View>
        </ScrollView>

        <Text style={styles.picksOfWeekText}>Les pépites de la semaine</Text>
        <ScrollView horizontal contentContainerStyle={styles.picksContainer}>
          <View style={styles.pick}>
            <View style={styles.pickImageContainer}>
              <View style={styles.pickImage}></View>
            </View>
            <Text style={styles.pickName}>Nom de l'outfit</Text>
            <Text style={styles.pickCreator}>Nom du créateur</Text>
            <Text style={styles.pickCategory}>Catégorie de style</Text>
          </View>
          <View style={styles.pick}>
            <View style={styles.pickImageContainer}>
              <View style={styles.pickImage}></View>
            </View>
            <Text style={styles.pickName}>Nom de l'outfit</Text>
            <Text style={styles.pickCreator}>Nom du créateur</Text>
            <Text style={styles.pickCategory}>Catégorie de style</Text>
          </View>
        </ScrollView>
      </ScrollView>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Titre de l'article"
          value={articleTitle}
          onChangeText={text => setArticleTitle(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Description de l'article"
          value={articleDescription}
          onChangeText={text => setArticleDescription(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="URL de l'image"
          value={articleImage}
          onChangeText={text => setArticleImage(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Nom de la personne"
          value={personName}
          onChangeText={text => setPersonName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Catégorie du style de vêtement"
          value={category}
          onChangeText={text => setCategory(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddArticle}>
          <Text style={styles.addButtonText}>Ajouter</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Image source={require('./B.png')} style={[styles.logo, { height: 80, width: 80 }]} />
        <View style={styles.footerIcons}>
          <Image source={require('./search-icon.png')} style={[styles.footerIcon, { width: 30, height: 30 }]} />
          <Image source={require('./favorites-icon.png')} style={[styles.footerIcon, { width: 30, height: 30 }]} />
          <TouchableOpacity onPress={handleAddArticle}>
            <Image source={require('./add-icon.png')} style={[styles.footerIcon, { width: 30, height: 30 }]} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AddArticle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flexGrow: 1,
    paddingBottom: 100,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EDEDED',
  },
  greetingText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FB5E01',
  },
  profileIconContainer: {
    alignItems: 'center',
  },
  profileIcon: {
    width: 30,
    height: 30,
  },
  profileText: {
    fontSize: 12,
    marginTop: 5,
    color: '#FB5E01',
  },
  categoriesContainer: {
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  category: {
    backgroundColor: '#F2F2F2',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginRight: 10,
    height: 40,
  },
  categoryText: {
    fontSize: 14,
  },
  photosContainer: {
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  photo: {
    width: 150,
    height: 100,
    backgroundColor: '#EDEDED',
    borderRadius: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  picksOfWeekText: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingHorizontal: 20,
    marginTop: 40,
    marginBottom: 15,
    color: '#FB5E01',
  },
  picksContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  pick: {
    marginRight: 20,
  },
  pickImageContainer: {
    width: 150,
    aspectRatio: 1,
    backgroundColor: 'pink',
    borderRadius: 10,
    marginBottom: 10,
  },
  pickImage: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: 'gray',
    marginBottom: 60,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  pickName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: -60,
    marginLeft: 20,
  },
  pickCreator: {
    fontSize: 12,
    color: 'gray',
    marginLeft: 20,
  },
  pickCategory: {
    fontSize: 12,
    color: 'gray',
    marginLeft: 20,
  },
  formContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  addButton: {
    backgroundColor: '#FB5E01',
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 10,
    borderTopWidth: 1,
    borderTopColor: '#EDEDED',
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    height: 120,
    backgroundColor: 'white',
  },
  logo: {
    width: 80,
    height: 80,
  },
  footerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 30,
  },
  footerIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
  },
});
