var prices = [
    {id:1,values:20},
    {id:1,values:40},
    {id:1,values:50},
    {id:1,values:30},
    {id:1,values:20},
];
const data = [...prices].sort((a,b) => a.values - b.values).map((item,index) =>({...item , rank:index+1 }))