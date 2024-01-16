var arr = [
    { name: "Project 1", description: "Description 1", deadline: "2024-02-01", completed: true },
    { name: "Project 2", description: "Description 2", deadline: "2024-03-15", completed: false },
    { name: "Project 3", description: "Description 3", deadline: "2024-04-30", completed: true },
    { name: "Project 4", description: "Description 4", deadline: "2024-05-20", completed: false },
    { name: "Project 5", description: "Description 5", deadline: "2024-06-10", completed: true }
];
var fina = arr.filter( item => item.completed ).map( item => ({ name:item.name , deadline:item.deadline }));

