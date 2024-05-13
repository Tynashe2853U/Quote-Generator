
const axios = require('axios');
const options = {
  method: 'POST',
  url: 'https://motivational-quotes1.p.rapidapi.com/motivation',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': 'c1a1c3cd41msh2a01c1bcdc066a4p1088eejsn668da140ae18',
    'X-RapidAPI-Host': 'motivational-quotes1.p.rapidapi.com'
  }
};

async function fetchMotivationalQuote() {
    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error('Error fetching motivational quote:', error);
        return 'An error occurred while fetching the quote.';
    }
}

async function printMotivationalQuote() {
    const quote = await fetchMotivationalQuote();
    console.log("Motivational Quote:");
    console.log(quote);
}

printMotivationalQuote();