import React from "react";
import styled from "styled-components/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ToolBar from "../components/ToolBar";
import MainSeparator from "../components/MainSeparator";
import Users from "../components/Users";
import Story from "../components/Story";

const View = styled.View`
    flex: 1;
    background: #FFFFFF;
`

const Home = () => {

    return(
    <GestureHandlerRootView> 
        <View>
            <ToolBar />
            <MainSeparator/>
            <Users />
            <MainSeparator/>
            <Story/>
            <MainSeparator/>
        </View>
    </GestureHandlerRootView>
    )
}

export default Home