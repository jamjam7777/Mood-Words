import { StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-elements";
import happyAffirm from "../components/happyAffirm";
import React, { useState } from "react";



function randomAngry() {
    
   
  const angryAffirm= [
    {
        id: 0,
        text:"Not everybody will understand my situation, and it is okay"
    },
    {
        id: 1,
        text:"I am not perfect, and it is okay"
    },
    {
        id: 2,
        text:"I forgive myself and everyone for not being perfect"
    },
    {
        id: 3,
        text:"This anger won’t last forever"
    },
    {
        id: 4,
        text:"I forgive myself, and I don’t blame myself for my current situation"
    },
    {
        id: 5,
        text:"I am a work in progress, and I welcome every positive change"
    },
    {
        id: 6,
        text:"I deserve love, joy, and happiness"
    },
    {
        id: 7,
        text:"I don’t have anything to prove to myself or anybody else"
    },
    {
        id: 8,
        text:"My thoughts do not shape my life"
    },
    {
        id: 9,
        text:"My actions and thoughts are fueled by love and kindness"
    },
    {
        id: 10,
        text:"I reject and let go of feelings of anger"
    },
    {
        id: 11,
        text:"I acknowledge my anger but refuse to act on it"
    },
    {
        id: 12,
        text:"I transform angry feelings into self-control "
    },
    {
        id: 13,
        text:"I choose not to react harshly and angrily"
    },
    {
        id: 14,
        text:"I deserve lI will create a peaceful environment"
    },
    {
        id: 15,
        text:"My mind is a calm space free of anger and toxicity"
    },
    {
        id: 16,
        text:"I avoid stressful situations and welcome sources of joy"
    },
    {
        id: 17,
        text:"I am becoming the best version of myself "
    },
    {
        id: 18,
        text:"I treat others with kindness"
    },
    {
        id: 19,
        text:"I am capable of de-escalating any situation"
    },
    {
        id: 20,
        text:"I radiate positive energy that expels negative thoughts and behaviors"
    },
    {
        id: 21,
        text:"What I’m going through is temporary and doesn’t disturb my peace"
    },
    {
        id: 22,
        text:"I pull myself back into a place of light and serenity"
    },
    ];
  return (angryAffirm[Math.floor(Math.random() * angryAffirm.length)].text);
}

const AngryScreen = () => {
  

  return (
    <View style={styles.container}>
      <Text style={{marginBottom: 10}}>{randomAngry()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffefd5",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 10,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 50,
  },
});

export default AngryScreen;
