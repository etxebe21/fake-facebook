import React from "react";
import 'react-native-gesture-handler';
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components/native";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import Avatar from "./Avatar";
import fakeUsers from "../data/fakeData.js";

const Container = styled.View`
    width: 100%;
    height: 60px;
    flex-direction: row;
    align-items: center;
    background: #FFFFFF;
`
const Room = styled.TouchableOpacity`
    width: 100px;
    height: 40px;
    flex-direction: row;
    align-items: center;
    border: 1px solid #82b1dd;
    border-radius: 20px;
    padding: 0 9px;
    margin-right: 12px;
`
const Text = styled.Text`
    color: #1777ff;
    font-size: 12px;
    padding-left: 4px;
`
const User = styled.View`
    margin-right: 12px;
`
const Users = () => {
    return(
        <Container>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator= {false}
                style={{paddingLeft: 12}}
                >
          <Room>
            <MaterialCommunityIcons name = "video-plus" size={26} color="#A748EE"/>
            <Text>Crear sala</Text>
          </Room> 
          {fakeUsers.map((elem,i) => {
            return(
                <User key={i.toString()}>
                    <Avatar source={elem.source} online={elem.online} />
                </User>
            )
          })}    
          </ScrollView>
        </Container>
    )
}

export default Users