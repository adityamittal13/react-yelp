import { ApiKey } from './secret';

const retrieveBusinessListings = async (business, location, sort) => {
    const apiKey = ApiKey;
    const baseUrl = "https://api.yelp.com/v3";
    const apiPath = "/businesses/search";
    const requestParameters = `?term=${business}&location=${location}&sort_by=${sort}`;
    const corsRestriction = "https://cors-anywhere.herokuapp.com/"
    const urlToFetch = `${corsRestriction}${baseUrl}${apiPath}${requestParameters}`;

    const response = await fetch(urlToFetch, {
        headers: {
            "Authorization": `Bearer ${apiKey}`,
            "accept": "application/json"
        }
    });

    if (response.ok) {
        const jsonResponse = await response.json();
        return jsonResponse.businesses;
    } else {
        alert("Error with request!");
        return [];
    }
} 

export default retrieveBusinessListings;