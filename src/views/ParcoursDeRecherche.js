/*import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const ParcoursDeRecherche = () => {
  // Je fais comme  le prénom de l'utilisateur soit stocké dans une variable "prenom"
  const prenom = "John";

  // Je fais comme si les images de personnes lambda soient stockées dans un tableau "imagesPersonnes"
  const imagesPersonnes = [
    require('./personne1.jpg'),
    require('./personne2.jpg'),
    require('./personne3.jpg'),
    // Ajoutez d'autres images de personnes lambda ici
  ];

  // Je suppose que les images des meilleures ventes soient stockées dans un tableau "imagesMeilleuresVentes"
  const imagesMeilleuresVentes = [
    require('./vente1.jpg'),
    require('./vente2.jpg'),
    require('./vente3.jpg'),
    // Ajoutez d'autres images des meilleures ventes ici
  ];

  const imagesDerniersLooks = [
    require('./look1.jpg'),
    require('./look2.jpg'),
    require('./look3.jpg'),
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Bonjour, {prenom}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Styles Vestimentaires</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={styles.styleButton}>
            <Text style={styles.styleButtonText}>Street Wear</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.styleButton}>
            <Text style={styles.styleButtonText}>Old Rich</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.styleButton}>
            <Text style={styles.styleButtonText}>Bobo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.styleButton}>
            <Text style={styles.styleButtonText}>Luxe</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Images Aléatoires</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {imagesPersonnes.map((image, index) => (
            <Image key={index} source={image} style={styles.randomImage} />
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Meilleures Ventes de la Semaine</Text>
        <Text style={styles.sectionSubtitle}>Les pépites de la semaine</Text>
        {imagesMeilleuresVentes.map((image, index) => (
          <View key={index} style={styles.bestSellersItem}>
            <Image source={image} style={styles.bestSellersImage} />
            <Text style={styles.bestSellersName}>Nom du Vêtement</Text>
            <Text style={styles.bestSellersSeller}>@username</Text>
            <Text style={styles.bestSellersCategory}>Street Wear</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Derniers Looks du Moment</Text>
        <TouchableOpacity style={styles.moreInspirationButton}>
          <Text style={styles.moreInspirationButtonText}>Plus d'inspiration</Text>
        </TouchableOpacity>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {imagesDerniersLooks.map((image, index) => (
            <Image key={index} source={image} style={styles.lastLooksImage} />
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default ParcoursDeRecherche;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  sectionSubtitle: {
    fontSize: 14,
    marginBottom: 10,
    color: '#888',
  },
  styleButton: {
    marginRight: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: 'orange',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  styleButtonText: {
    color: 'white',
    fontSize: 16,
  },
  randomImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  bestSellersItem: {
    marginBottom: 20,
  },
  bestSellersImage: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  bestSellersName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bestSellersSeller: {
    fontSize: 14,
    marginBottom: 5,
    color: 'gray',
  },
  bestSellersCategory: {
    fontSize: 14,
    color: 'orange',
  },
  moreInspirationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  moreInspirationButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'orange',
  },
  moreInspirationIcon: {
    width: 20,
    height: 20,
    marginLeft: 5,
    tintColor: 'orange',
  },
  lastLooksImage: {
    width: 150,
    height: 200,
    marginRight: 10,
  },
});
*/