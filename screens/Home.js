import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import ToolBar from "../components/ToolBar";
import MainSeparator from "../components/MainSeparator";

const View = styled.View`
    flex: 1
`

const Home = () => {

    return(
        <View>
           <ToolBar/>
           <MainSeparator/>
           {/* <Text> Home</Text> */}

        </View>
    )
}

export default Home