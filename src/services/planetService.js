import axios from 'axios';

const axios = require( 'axios');

axios.get('https://swapi.dev/planets/')
.then(function(res){
    console.log(res);
})
.catch((error)=>{
    console.log(error);
});


