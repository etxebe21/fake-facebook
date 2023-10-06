import React from "react";
import styled from "styled-components/native";
import Avatar from "../components/Avatar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MyStory from "../components/myStory";
import { ScrollView } from "react-native";
import MainSeparator from "../components/MainSeparator";

const View = styled.View`
    align-items: center;
    height: 500px;
    background: #FFFFFF;
`
const Container = styled.View`
    width: 100%;
    height: 92px;
`
const Row = styled.View`
    flex-direction: row;
    background: #FFFFFF;
    width: 100%;
    padding: 0 11px;
    align-items: center;
`
const Input = styled.TextInput`
    flex: 1;
    width: 100%;
    height: 40px;
    padding: 0 8px;
    border: 1px solid #DDD;
    margin: 10px;
    border-radius: 30px;
`
const IconContainer = styled.View`
    margin-left: 10px;
`
const Image = styled.Image`
    flex-direction: row;
    width: 100%;
   
    align-items: center;
`
const RoundedImage = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 100px;
    margin-top: 20px;
`
const Text = styled.Text `
    color: #3a86e9;
    font-size: 25px;
    font-weight: bold;
    letter-spacing: -0.3px;
    
`
const TextIcon = styled.Text `
    color: #3a86e9;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: -0.3px;
    padding: 5px;
`

const Profile = () => {

    return(
        
        <View>
        <ScrollView>
            <Row>
                <IconContainer>
                    <MaterialCommunityIcons name='chevron-left' size={30} color='#3a86e9' />
                </IconContainer>
                <Input color='#3a86e9' >  <MaterialCommunityIcons name='magnify' size={22} color='#3a86e9' />      Mikel Etxebe </Input>
                <IconContainer>
                    <MaterialCommunityIcons name='account-box-multiple-outline' size={26} color='#3a86e9' />
                </IconContainer>
            </Row>
            <Image
                source={require('../assets/post2.jpg')}  
                style={{ height: 200 }}      
            />
            <RoundedImage source={require('../assets/post1.jpg')}  
                style={{ width: 100,height: 100 }}      />
                 <Text> Mikel Etxebe </Text>
                 <MainSeparator/>  
            <Row >
                <IconContainer>
                    <MaterialCommunityIcons name='plus-circle-outline' size={40} color='#3a86e9' />
                    <TextIcon>Add Story</TextIcon>
                </IconContainer>
                <IconContainer>
                    <MaterialCommunityIcons name='format-list-bulleted' size={40} color='#3a86e9' />
                    <TextIcon>Activity Log</TextIcon>
                </IconContainer>
                <IconContainer>
                    <MaterialCommunityIcons name='pencil-circle-outline' size={40} color='#3a86e9' />
                    <TextIcon>Edit Profile</TextIcon>
                </IconContainer>  
                <IconContainer>
                    <MaterialCommunityIcons name='dots-horizontal-circle-outline' size={40} color='#3a86e9' />
                    <TextIcon> More</TextIcon>
                </IconContainer>
            </Row>
            <MainSeparator/>
            <Row>
            <MyStory/>
            </Row>
            </ScrollView>
        </View>
       
    )
}

export default Profile;