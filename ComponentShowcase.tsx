import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Alert, TouchableOpacity } from 'react-native';

const ComponentShowcase = () => {
  const handleButtonPress = () => {
    Alert.alert('NICE TO MEET YOU! RAWR!');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Nice to Meet You</Text>

        <Text style={styles.sectionTitle}>Me</Text>
      <Image
        source={require('./assets/me.jpg')} // <- your image file path
        style={styles.image}
      />

      <Text style={styles.sectionTitle}>About Me</Text>
      <Text style={styles.text}>
        Hi! I'm Ashlengail Victor, turning 22 this upcoming October. 
        I’m studying BSIT at the University of San Carlos. 
        I was born in Manila but raised in Cebu, and currently, I live in Lapu-Lapu.
      </Text>

      <Text style={styles.sectionTitle}>My Pet</Text>
      <Text style={styles.text}>
        I recently got a small dog, a toy poodle named Amian. 
        His name means “Unbeatable” or “Invincible” in Celtic, 
        and in Arabic, it means “Tamer who brings peace and harmony”. 
        I hope he will bring those qualities into my life.
      </Text>
      <Image
        source={{ uri: 'https://place-puppy.com/150x150' }} // placeholder puppy image
        style={styles.image}
      />

      <Text style={styles.sectionTitle}>Family</Text>
      <Text style={styles.text}>
        I have a mum, a dad, and an older brother. 
        My mum and older brother are currently in Malta, 
        while my dad and I are here in Lapu-Lapu. 
        They are busy with work, but it’s all good because I have Amian and a bit of sports on the side.
      </Text>

      <Text style={styles.sectionTitle}>Hobbies</Text>
      <Text style={styles.text}>
        My hobbies include drawing, painting, watching shows, and playing frisbee. 
        I might also try flag football in the future.
      </Text>

      <Text style={styles.sectionTitle}>Goals</Text>
      <Text style={styles.text}>
        My immediate goal is to stay alive and graduate. 
        In the future, I hope to work remotely, travel the world with my dog, 
        and maybe have a family—but not anytime soon.
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <Text style={styles.buttonText}>Hello, I'm Ashly</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#ffe4e1', // baby/pastel pink
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#000',
    marginTop: 15,
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    marginBottom: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginVertical: 15,
  },
  buttonContainer: {
    marginTop: 20,
    width: '60%',
  },
  button: {
    backgroundColor: '#f4c2c2', // slightly darker pink
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#8B0000', // dark red
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ComponentShowcase;
