// ES11 - Chaining Operator 

const user = {
  name: 'VedaGna',
  location:{
    street:{
      number: 20,
      name: 'HMT Hills'
    }
  }
};

//OLD Way // ES6
// const streetName = user.location && user.location.street && user.location.street.name;
// console.log(streetName);  //HMT Hills 

//NEW Way
const streetName = user?.location?.street?.name;
console.log(streetName);  //HMT Hills 