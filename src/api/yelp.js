 //axios separate library to making requests
 //here baseUrl connected with an Api i.e. on yelp.com website where i created app
 //in Authorization i write api key which io got from yelp website

import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer VhBoDxp5-3LAKdOJBu565siy4JqufbeIl-hIG6QEb61zVCTFtAOWRRPaewwOGhfCCdFbPKeOw_4ACX6afu6-MHHaziAsWDsrvpRhQjC3NqGQowhhGHMnIQwziEJtYnYx'
    }
});


