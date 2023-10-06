
import React, { useRef, useEffect } from "react";
import { ScrollView, Animated } from "react-native";
import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import fakeStories from "../data/fakeStories";
import Avatar from "./Avatar";
import myFakeStories from "../data/myFakeStories";

const Container = styled.View`
    width: 100%;
    height: 230px;
    flex-direction: row;
    align-items: center;
    background: #FFFFFF;
`;

const UseCard = styled.View`
    width: 110px;
    height: 200px;
    margin-right: 10px;
    position: relative;
`;
const UseCardStory = styled.Image`
    width: 100%;
    height: 200px;
    border-radius: 10px;
`;

const UserCardFooter = styled.View`
    position: absolute;
    width: 100%;
    height: 35%;
    top: 130px;
    left: 0px;
    background: ${(props) => (props.profile ? '#FFFFFF' : 'rgba(255, 255, 255, 0')};
`;
const Text = styled.Text`
    font-size: 12px;
    font-weight: bold;
    margin: 0 10px;
    padding-top: ${(props) => (props.profile ? '15px' : '45px')};
    text-align: center;
    color: ${(props) => (props.profile ? '#000000' : '#FFFFFF')};
`;
const UserOnCard = styled.View`
    position: absolute;
    top: 8px;
    left: 8px;
    background: #FFFFFF;
    border-radius: 20px;
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
`;

const MyStory = () => {
    

    return (
        <Container>
        
        <ScrollView
            
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ paddingLeft: 10 }}
        >
            {myFakeStories.map((story, i) => {
                return (
                    <UseCard key={i.toString()}>
                        <UseCardStory source={story.source} />
                        <UserCardFooter profile={false}>
                            <Text profile={false}>{story.name}</Text>
                        </UserCardFooter>
                        <UserOnCard>
                            <Avatar source={require('../assets/mikel.jpg')} story={true} checked={story.checked} />
                        </UserOnCard>
                    </UseCard>
                );
            })}
        </ScrollView>
    </Container>
    );
};

export default MyStory;