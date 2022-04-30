import React,{useState} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    //this state is created for yelp api objects
    const [results, setResults] = useState([]);
    // this state is for api handling try catch
    const [errorMessage, setErrorMessage] = useState('');

    //helper function
    // '/search' is a route linked with api

    const searchApi = async (searchTerm) => {
        console.log('Hi there!');
        try {
            const response = await yelp.get('/search',{
                params: {
                    limit : 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            // console.log(err);
            setErrorMessage("Something went wrong!");
        }
       
        
    }

    //fetch is used fot making network requests
    //axios separate library to making requests

    //Call search Api when component
    //is first rendered. but this is BAD CODE so don.t use this searchApi()
    // searchApi('pasta');

    return(
        <View>
            <SearchBar 
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
                />
           {errorMessage 
                ? <Text>{errorMessage}</Text> 
                : null } 
            <Text>We have found {results.length} results.</Text>
        </View>
    );
};

export default SearchScreen;