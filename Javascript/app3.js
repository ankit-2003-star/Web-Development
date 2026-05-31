let todo = [];
let req = prompt("Please enter your request");
while (true) {
    if (req == "quit") {
        console.log("Quitting app");
        break;
    }
    if (req == "list") {
        console.log("--------------------");
        for (let i = 0; i < todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log("--------------------");
    } else if (req == "add") {
        let task = prompt("please enter the task");
        todo.push(task);
        console.log("task added");
    } else if (req=="delete") {
        let idx=prompt("please enter the index of which to delete");
        console.log(`deleted ${todo[idx]}`);
        todo.splice(idx,1);
        
    }
    req = prompt("Please enter your request");
}