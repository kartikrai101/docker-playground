const express = require('express');
const redis = require("redis");

const app = express();
// const client = redis.createClient({
// 	host: 'redis-server', // see that this is simply the name of redis server that is running in the other container which we mentioned in the docker-compose.yml file
// 	port: 6379 // this is the default port on which redis runs
// });
const client = redis.createClient({
    socket: {
       port: 6379,
       host: 'redis-server'
    }
});
client.set('visits', 0);

app.get('/', (req, res) => {
    client.get('visits', (err, visits) => {
        res.send('Number of visits is: ' + visits)
        client.set('visits', parseInt(visits)+1)
    })
})

app.listen(8081, () => {
    console.log("Listening to port 8081...")
})