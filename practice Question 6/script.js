const users = [
    {id:1,name:"kavita"},
    {id:2,name:"bavita"},
    {id:3,name:"vavita"},
    {id:4,name:"havita"},
];

const cities = [
    {id:1,city:"mumbai"},
    {id:2,city:"mangaluru"},
    {id:3,city:"mysore"},
    {id:33,city:"mandya"},
];

const user = users.map( item => ({...item,...cities.find( item2 => (item2.id == item.id ))}));