import { StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-elements";
import happyAffirm from "../components/happyAffirm";
import React, { useState } from "react";



function randomSad() {
    
   
  const sadAffirm= [
    {
        id: 0,
        text:"Not everybody will understand my situation, and it is okay"
    },
    {
        id: 1,
        text:"I am much more than what I think I am"
    },
    {
        id: 2,
        text:"Every day is a gift, and I am blessed to see today"
    },
    {
        id: 3,
        text:"I have made it this far, and I won’t stop now"
    },
    {
        id: 4,
        text:"I am loved and appreciated even when I feel like I’m not"
    },
    {
        id: 5,
        text:"I am a work in progress, and I welcome every positive change"
    },
    {
        id: 6,
        text:"The darkness is in the past, and I open my eyes to new beginnings"
    },
    {
        id: 7,
        text:"I am more than what people think I am"
    },
    {
        id: 8,
        text:"My thoughts do not shape my life"
    },
    {
        id: 9,
        text:"I am needed regardless of how worthless I feel"
    },
    {
        id: 10,
        text:"Everything will work out, and I will watch it unfold"
    },
    {
        id: 11,
        text:"I forgive myself"
    },
    {
        id: 12,
        text:"I don’t blame myself for my current situation"
    },
    {
        id: 13,
        text:"It won’t last forever, and I will come out stronger"
    },
    {
        id: 14,
        text:"I deserve love, joy, and happiness focus on what I can control. I let go of the rest"
    },
    {
        id: 15,
        text:"I deserve everything good"
    },
    {
        id: 16,
        text:"I don’t have anything to prove to myself or anybody else"
    },
    {
        id: 17,
        text:"I embrace being a positive, I am enough, and that is okay"
    },
    {
        id: 18,
        text:"This darkness won’t last forever"
    },
    {
        id: 19,
        text:"I am not perfect, and it is okay"
    },
    {
        id: 20,
        text:"I forgive myself and everyone for not being perfect"
    },
    {
        id: 21,
        text:"Every day I continue to become stronger"
    },
    {
        id: 22,
        text:"I embrace who I am"
    },
    
    ]
  return (sadAffirm[Math.floor(Math.random() * sadAffirm.length)].text);
}

const SadScreen = () => {
  

  return (
    <View style={styles.container}>
    <Card>
    <View>
      <Text 
      style={{
        color: '#2f4f4f',
        fontSize: 30,
        padding: 50,
      }}
    >{randomSad()}</Text>
    </View>
    </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffefd5",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
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

export default SadScreen;
