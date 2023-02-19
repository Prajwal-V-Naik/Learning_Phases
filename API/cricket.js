const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://livescore6.p.rapidapi.com/matches/v2/list-live',
  params: {Category: 'soccer', Timezone: '-7'},
  headers: {
    'X-RapidAPI-Key': '0c8b8d7cddmsh038bd5b0e6641dap137fd6jsncebc4b5f9aec',
    'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});