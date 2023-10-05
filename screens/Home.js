import React from "react";
import styled from "styled-components/native";
import ToolBar from "../components/ToolBar";
import MainSeparator from "../components/MainSeparator";
import Users from "../components/Users";
import Story from "../components/Story";
import Post from "../components/Post";

const View = styled.View`
    flex: 1;
    background: #FFFFFF;
`

const Home = () => {

    return(
        <View>
            <ToolBar />
            <MainSeparator/>
            <Users />
            <MainSeparator/>
            <Story/>
            <MainSeparator/>
            {/* <Post/> */}
        </View>
    )
}

export default Home