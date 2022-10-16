const player = {
    name: 'Lebron James',
    club: 'LA Lakers',
    address: {
      city: 'Los Angeles'
    }
  };
  
console.log('player.address.city: ' + player.address.city );

// Object destructuring allows you to grab the keys (i.e.: name, club, etc) of your object
// without having to access it all the time the object name;
const { name, club, address: { city } } = player;

console.log(`${name} plays for ${club}`);
console.log(`${name} lives in ${city}`);