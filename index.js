const { response } = require('express');
const express = require('express');
const app = express();
const port = 3000;
const fetch = require('node-fetch');

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

app.get('/dinoname', async(request, response) =>{
  
  const fetchApi = await fetch("https://alexnormand-dino-ipsum.p.rapidapi.com/?paragraphs=1&words=2&format=json", {
	"method": "GET",
	"headers": {
	
	}
});
 const dinoNameReposnse = await fetchApi.json();
 console.log(dinoNameReposnse);
 response.json(dinoNameReposnse);
});