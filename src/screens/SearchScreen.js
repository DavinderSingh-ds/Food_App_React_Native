import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { SearchBar } from 'react-native-screens';

const SearchScreen = () => {
    return(
        <View>
            <SearchBar/>
            <Text>SearchScreen</Text>
        </View>
    );
};

export default SearchScreen;