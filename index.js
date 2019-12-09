var dns = require('dns');

const getIp = address => {
  let myAddress = address;
  return new Promise((resolve, reject) => {
      dns.lookup(myAddress, (err, address) => {
      if(err) {
          return reject(err);
      }
      return resolve(address || 'localhost');
      });
  });
};

// let redisServer;
// let rabbitmqServer;

const getRedisEnv = async () => {
    await getIp('rabbit').then(function(result) {
        process.env.REDIS_URL = `amqp://${result}`;
        console.log(result);
    });
    await getIp('redis-server').then(function(result) {
        process.env.REDIS_URL = `redis://${result}:6379`;
        console.log(result);
    })
};


// const REDIS_URL = handlePromise();

let REDIS_URL;

getRedisEnv();

setTimeout(function(){
    //do what you need here
    console.log(process.env.REDIS_URL);
}, 100);

console.log(REDIS_URL);
