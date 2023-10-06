import React from "react";
import styled from "styled-components/native";
import Avatar from "../components/Avatar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MyStory from "../components/myStory";
import { ScrollView } from "react-native";
import MainSeparator from "../components/MainSeparator";

const View = styled.View`
    align-items: center;
    height: 660px;
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
     bottom: 10px;
    height: 60px;
    margin-left: 10px;
    align-items: center; 
`
const TopIconContainer = styled.View`
    bottom: -15px;
    height: 60px;
    margin-left: 10px;
    align-items: center; 
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
    bottom: 55px;
    align-self: center; 
    border: 5px;
    border-color: #3a86e9;
`

const Text = styled.Text `
    bottom: 40px;
    color: #3a86e9;
    font-size: 25px;
    font-weight: bold;
    letter-spacing: -0.3px;
    align-self: center; 
    
`
const TextIcon = styled.Text `
    color: #3a86e9;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: -0.3px;
    padding: 5px;
`
const UserActive = styled.View`
    bottom: 80px;
    right: -224px;
    width: 25px;
    height: 25px;
    border-radius: 15px;
    background: #10D24B;
    border: 2px solid #FFFFFF;
`;


const Profile = () => {

    return(
        
        <View>
        <ScrollView>
            <Row>
                <TopIconContainer>
                    <MaterialCommunityIcons name='chevron-left' size={30} color='#3a86e9' />
                </TopIconContainer>
                <Input color='#3a86e9' >  <MaterialCommunityIcons name='magnify' size={22} color='#3a86e9' />  Mikel Etxebe </Input>
                <TopIconContainer>
                    <MaterialCommunityIcons name='account-box-multiple-outline' size={26} color='#3a86e9' />
                </TopIconContainer>
            </Row>    
            <Image
                source={require('../assets/fake.png')}  
                style={{ height: 200 }}      
            />
            <RoundedImage source={require('../assets/mikel.jpg')}  
                style={{ width: 150,height: 150 }}      />
                
                <UserActive></UserActive>
             <Text> Mikel Etxebe </Text>
                
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
            <TextIcon> Story Highlights                                                   Add New</TextIcon>
            <Row>
            <MyStory/>
            </Row>
            </ScrollView>
        </View>
       
    )
}

export default Profile;