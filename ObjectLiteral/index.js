function addressMaker(city, state) {
    
    const newAdress = { newCity: city, newState: state };
    
    // Object Literal gives the ability to assign the value of city (from parameter) to city (variable),
    // and state (parameter) to state (variable), if these keys are the same as the value they are passing;
    const newAdressWithSameNameProperty = { city, state };
    
    console.log(newAdress);
    console.log(newAdressWithSameNameProperty);
}

addressMaker('Arnhem', 'Gelderland');
addressMaker('Nijmegen', 'Gelderland');