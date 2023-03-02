const ToDo = [];
let input = "";
while (input !== "quit") {
    input = prompt("What do you want to do?").toLowerCase();
    if (input === "new") {
        let newToDo = prompt("Add something to Todo list.").toLowerCase();
        ToDo.unshift(newToDo);
        console.log(newToDo.toUpperCase() + " added");
    } else if (input === "delete") {
        let deletedToDo = prompt("Delete something from Todo list.").toLowerCase();
        if (ToDo.indexOf(deletedToDo) === -1) {
            console.log("There is no Todo as " + "'" + deletedToDo.toUpperCase() + "'");
        } else {
            ToDo.splice(ToDo.indexOf(deletedToDo), 1);
            console.log(deletedToDo.toUpperCase() + " is deleted");
        }
    } else if (input === "list") {
        console.log("********");
        for (let dos of ToDo) {
            console.log(`${ToDo.indexOf(dos) + 1}: ${dos.toUpperCase()}`);
        }
        console.log("********");
    }
}