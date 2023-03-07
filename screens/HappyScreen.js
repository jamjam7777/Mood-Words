import { StyleSheet, Text, View } from "react-native";
import happyAffirm from "../components/happyAffirm";
import React, { useState } from "react";

function randomHappy() {
  const happyAffirm= [
    {
        id: 0,
        text:"I am positive. I am loved. I am enough"
    },
    {
        id: 1,
        text:"I start every day with gratitude and thanks"
    },
    {
        id: 2,
        text:"Today is full of opportunity"
    },
    {
        id: 3,
        text:"I am grateful for what I have"
    },
    {
        id: 4,
        text:"I am confidently making choices that will create a better future"
    },
    {
        id: 5,
        text:"Today I am working toward creating the life of my dreams"
    },
    {
        id: 6,
        text:"I have everything I need"
    },
    {
        id: 7,
        text:"Life is full of meaning"
    },
    {
        id: 8,
        text:"I will make the most of this day"
    },
    {
        id: 9,
        text:"Today I will be fabulous"
    },
    {
        id: 10,
        text:"I am positive and create joy and happiness for others"
    },
    {
        id: 11,
        text:"I have a positive attitude "
    },
    {
        id: 12,
        text:"I accept with an open heart everything that comes"
    },
    {
        id: 13,
        text:"I feel healthy, wealthy, and wise"
    },
    {
        id: 14,
        text:"I focus on what I can control. I let go of the rest"
    },
    {
        id: 15,
        text:"I am present, powerful, and calm"
    },
    {
        id: 16,
        text:"I am focused on my family, relationships, and career"
    },
    {
        id: 17,
        text:"I embrace being a positive, joyful, and playful"
    },
    {
        id: 18,
        text:"My courage is a strong tower that surrounds me"
    },
    {
        id: 19,
        text:"I am a confident and capable person"
    },
    {
        id: 20,
        text:"My courage is a strong tower that surrounds me"
    },
    {
        id: 21,
        text:"Every day I continue to become stronger"
    },
    {
        id: 22,
        text:"I embrace who I am"
    },
    ];
  return (happyAffirm[Math.floor(Math.random() * happyAffirm.length)].text);
}

const HappyScreen = () => {
  // const [happyAffirm, setHappyAffirm] = useState(randomHappy());
  //   const randomString = randomHappy();
  //   setHappyAffirm(randomString);

  return (
    <View style={styles.container}>
      <Text>IM HAPPY</Text>
      <Text>{happyAffirm}</Text>
      <Text>{randomHappy()}</Text>
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

export default HappyScreen;
