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
    "x-rapidapi-key": "024186e3f5msh8855e9b63183b8ep18173bjsn770b6df40131",
		"x-rapidapi-host": "alexnormand-dino-ipsum.p.rapidapi.com"
	}
});
 const dinoNameReposnse = await fetchApi.json();
 console.log(dinoNameReposnse);
 response.json(dinoNameReposnse);
});

app.get('/dinoimage', async(request, response) =>{
  
  const fetchApi = await fetch("https://bing-image-search1.p.rapidapi.com/images/search?q=dinosaur&count=10", {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "024186e3f5msh8855e9b63183b8ep18173bjsn770b6df40131",
      "x-rapidapi-host": "bing-image-search1.p.rapidapi.com"
    }
  });
 const dinoImageReposnse = await fetchApi.json();
 console.log(dinoImageReposnse);
 response.json(dinoImageReposnse);
});