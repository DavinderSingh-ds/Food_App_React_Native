import React, { useState, useEffect } from 'react';
import {View,Text,StyleSheet} from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({navigation,route}) => {
    const [result, setResult] = useState(null);
    const id = route.params.id;
      
    console.log(id);
    // console.log(result);

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    },[]);

    if (!result) {
        return null;
    }

    return (
        <View>
            <Text>{id}</Text>
        </View>
    );
};

export default ResultsShowScreen;