export interface TodosLinks {
    to: string,
    text: number | string,
    id: number,
}

const todos: TodosLinks[] = [];

for (let i = 1; i <= 10; i++) {
    todos.push({
        to: `/users/${i}/todos`,
        text: i,
        id: i,
    })
}

export default todos;