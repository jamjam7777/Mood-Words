import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import angryAffirm from '/angryAffirm';
import happyAffirm from '/happyAffirm';
import sadAffirm from '/sadAffirm';


function randomAffirm() {
    

    let randomNum = Math.floor(Math.random() * 4)
    
    let randomString = angryArr[randomNum].text
    
    console.log(randomString)
    
    }