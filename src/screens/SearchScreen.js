import React,{useState} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [term, setTerm] = useState('');

    //this state is created for yelp api objects
    const [results, setResults] = useState([]);

    //helper function
    // '/search' is a route linked with api

    const searchApi = async () => {
        const response = await yelp.get('/search',{
            params: {
                limit : 50,
                term,
                location: 'san jose'
            }
        });
        setResults(response.data.businesses);
        
    }

    //fetch is used fot making network requests
    //axios separate library to making requests

    return(
        <View>
            <SearchBar 
                term={term}
                onTermChange={setTerm}
                onTermSubmit={searchApi}
                />
            <Text>Search Screen</Text>
            <Text>We have found {results.length} results.</Text>
        </View>
    );
};

export default SearchScreen;