let input=prompt("what would you like to do?");
const todos=['cute','sexy'];
while(input !=='quit' && input !== 'q')
{ if(input==='list')
{
    console.log('*******')
    for(let i=0;i<todos.length;i++) {
        console.log(`${i}:${todos[i]}`);
    }
    console.log('*******')
}
else if(input==='new')
{
    const newTodo=prompt("Okay, what is the  new todo?");
    todos.push(newTodo);
    console.log(`${newTodo} added to the list `)
}
else if(input==='delete')
{
    const index=prompt("Okay, what is the  index?");
    console.log(index);
    todos.splice(index,1);
    console.log(`${todos[index]} is deleted from the list`);
}
    input=prompt("what would you like to do?")
}
console.log("OK YOU QUIT THE APP")