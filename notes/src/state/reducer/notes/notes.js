let def = [
    {
        id: 0,
        name: 'Shopping list',
        category: 'Task',
        dates: [],
        content: 'Tomato, bread, butter, salt, bottle of water,coffee',
        created: "April 10, 2021",
        archive: false
    },
    {
        id: 1,
        name: 'Shopping list1',
        category: 'Task',
        dates: [],
        content: 'Tomato, bread, butter, salt, bottle of water,coffee',
        created: "April 10, 2021",
        archive: false,
        visible: false,
    },
    {
        id: 2,
        name: 'Shopping list2',
        category: 'Task',
        dates: [],
        content: 'Tomato, bread, butter, salt, bottle of water,coffee',
        created: "April 10, 2021",
        archive: true,
        visible: false
    },
    {
        id: 3,
        name: 'New Feature',
        category: 'Idea',
        dates: ['3/5/2021', '5/5/2021', '3/5/2021', '3/5/2021'],
        content: 'I’m gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021 the dates column is 3/5/2021, 5/5/2021',
        created: "April 10, 2021",
        archive: false,
        visible: false
    }
]

export default function notes(store = def, actions) {
    switch (actions.type) {
        case 'PUSH_NOTE':{
            return store;
        }
        default:
            return store;
    }
}

export const pushNote = () => {
    return {
        type: 'PUSH_NOTE'
    }
}