import * as cohere from 'cohere';

const { CohereClient } = require("cohere-ai");

const cohere = new CohereClient({
    token: "l1oflAR4IgAwFhH4vzr8WO41F2OcbPsrWUv5zWd2",
});


function getResponse() {

    var promptString = document.getElementById("string");

    (async () => {
        const generate = await cohere.generate({
            // prompt: "Please explain to me how LLMs work",
            prompt: promptString,
        });
      
        console.log(generate);
      })();



}


// co = new cohere.Client("0qvGBtiVZattxDeOgW9WQPgKjACubaQNp4GblUVK");
// headers = {
//   "x-api-key": "l1oflAR4IgAwFhH4vzr8WO41F2OcbPsrWUv5zWd2"
// };
