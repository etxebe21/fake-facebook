
import React, { useRef, useEffect } from "react";
import { ScrollView, Animated } from "react-native";
import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import fakeStories from "../data/fakeStories";
import Avatar from "./Avatar";

const Container = styled.View`
    width: 100%;
    height: 230px;
    flex-direction: row;
    align-items: center;
    background: #FFFFFF;
`;
const FakeCard = styled.View`
    width: 110px;
    height: 230px;
    margin-left: 10px;
    background: #FFFFFF;
`
const PersonalCard = styled.View`
    width: 110px;
    height: 200px;
    margin-right: 10px;
    position: absolute;
    background: #FFFFFF;
    border-radius: 10px;
    z-index: 10;
    border: 1px solid #DDDDDD;
`;
const  PersonalCardStory = styled.Image`
    width: 100%;
    height: 130px;
    border-radius: 10px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    position: absolute;
    top: 0px;
    left: 0px;
`;
const PersonalCardIcon = styled.View`
    width: 34px;
    height: 34px;
    border-radius: 17px;
    background: #3a86e9;
    border-width: 3px;
    border-color: #FFFFFF;
    align-items: center;
    position: absolute;
    top: 115px;
    left: 540px;
`

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
const UseCardPlus = styled.View`
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background: #3a86e9;
    align-items: center;
    position: absolute;
    top: 115px;
    left: 40px;
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

const Story = () => {
    
    return(
        <>
            <Container>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{paddingLeft:10}}
                >
                <UseCard>
                    <UseCardStory source={require('../assets/story.jpg')}/>
                    <UserCardFooter profile={true}>
                            <Text  profile={true}>Crear una historia</Text>
                    </UserCardFooter>
                    <UseCardPlus>
                        <MaterialCommunityIcons name = "plus" size={28} color="#FFFFFF"/>
                    </UseCardPlus>
                </UseCard>
                 {fakeStories.map((story, i) => {
                    return(
                        <UseCard key = {i.toString()}>
                            <UseCardStory source={story.source}/>
                            <UserCardFooter profile={false}>
                                <Text profile={false}>{story.name}</Text>
                            </UserCardFooter>
                            <UserOnCard>
                                <Avatar
                                    source={story.user}
                                    story={true}
                                    checked={story.checked}
                                />
                            </UserOnCard>
                        </UseCard>
                    )
                 })}
               </ScrollView>
            </Container>

        </>
    )
}

export default Story














// const Story = () => {
//     const scrollViewRef = useRef();
//     const scrollX = useRef(new Animated.Value(0)).current;
//     const firstCardTransform = useRef(new Animated.Value(0)).current;

//     useEffect(() => {
//         Animated.timing(scrollX, {
//             toValue: 1,
//             duration: 1000,
//             useNativeDriver: false,
//         }).start();
//     }, []);

//     useEffect(() => {
//         Animated.timing(firstCardTransform, {
//             toValue: 1,
//             duration: 1000,
//             useNativeDriver: false,
//         }).start();
//     }, []);

//     return (
//         <Container>
//         <UseCard>
//             <UseCardStory source={require("../assets/story.jpg")} />
//             <UserCardFooter profile={true}>
//                 <Text profile={true}>Crear una historia</Text>
//             </UserCardFooter>
//             <UseCardPlus>
//                 <MaterialCommunityIcons name="plus" size={28} color="#FFFFFF" />
//             </UseCardPlus>
//         </UseCard>
//         <ScrollView
//             ref={scrollViewRef}
//             horizontal
//             showsHorizontalScrollIndicator={false}
//             style={{ paddingLeft: 10 }}
//             scrollEventThrottle={16}
//             onScroll={Animated.event(
//                 [{ nativeEvent: { contentOffset: { x: scrollX } } }],
//                 { useNativeDriver: false }
//             )}
//         >
//             {fakeStories.map((story, i) => {
//                 return (
//                     <UseCard key={i.toString()}>
//                         <UseCardStory source={story.source} />
//                         <UserCardFooter profile={false}>
//                             <Text profile={false}>{story.name}</Text>
//                         </UserCardFooter>
//                         <UserOnCard>
//                             <Avatar source={story.user} story={true} checked={story.checked} />
//                         </UserOnCard>
//                     </UseCard>
//                 );
//             })}
//         </ScrollView>
//     </Container>
//     );
// };

//export default Story;