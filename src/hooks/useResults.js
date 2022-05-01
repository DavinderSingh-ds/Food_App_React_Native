// Hook is used for adding some additional functionality to a component
//useResults.js or useBusinesses.js or useRestaurants.js all names related
// code that all related to yelp api write here

import {useEffect , useState} from 'react';
import yelp from '../api/yelp';

export default () => {
    //this state is created for yelp api objects
    const [results, setResults] = useState([]);
    // this state is for api handling try catch
    const [errorMessage, setErrorMessage] = useState('');

    //helper function '/search' is a route linked with api
    const searchApi = async (searchTerm) => {
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
    useEffect(() => {
        searchApi('pasta');
    },[]);

    return [searchApi, results, errorMessage];
};