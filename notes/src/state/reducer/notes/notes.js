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

export default function notes(state = def, actions) {
    switch (actions.type) {
        case 'ADD_OR_DELETE_NOTE_ACHIVE': {
            let newState = state.filter(item => {

                if (item.id === actions.value) {
                    item.archive = !item.archive;
                }

                return item;
            })
            return [...newState];
        }
        case 'DELETE_NOTE_TO_STATE': {
            let newState = state.filter(item => item.id !== actions.value);

            return [...newState];
        }
        case 'DELETE_ALL_NOTES_TO_STATE': {
            let newState = state.filter(item => item.archive !== actions.value);

            return [...newState];
        }
        case 'UPDATE_NOTE_TO_STATE': {
            let newState = state.map(item => {
                console.log(item.id === actions.id);
                if (item.id === actions.id) {
                    item = {...item, ...actions.value}
                    console.log(item);
                }

                return item;
            })

            console.log(newState);

            return [...newState];
        }

        case 'CREATE_NOTE_TO_STATE' : {
            let newState = [...state, { ...actions.value, id: state.length } ];
            console.log(newState);
            return newState;
        }
        default:
            return state;
    }
}

export const addOrDeleteNoteInState = (id) => {
    return {
        type: 'ADD_OR_DELETE_NOTE_ACHIVE', 
        value: id
    }
}

export const deleteNoteInState = (id) => {
    return {
        type: 'DELETE_NOTE_TO_STATE',
        value: id
    }
}

export const deleteAllNotesInState = (state) => {
    return {
        type: 'DELETE_ALL_NOTES_TO_STATE',
        value: state
    }
}

export const updateNoteInState = (data) => {
    let dates = data.content.match(/[0-3]?[0-9].[0-3]?[0-9].(?:[0-9]{2})?[0-9]{2}/g);
    let result = {}

    if (!data.name.trim().length) {
        data.name = 'New Note';
    }

    dates = dates !== null ? dates : [];

    result = {
        name: data.name,
        category: data.category,
        content: data.content,
        dates: dates
    }


    console.log(result);

    return {
        type: 'UPDATE_NOTE_TO_STATE',
        value: result,
        id: data.id
    }
}

export const createNoteInState = (data) => {
    let date = new Date();
    let month = date.toLocaleDateString('en-US', {
        month: 'long'
    })
    let day = date.getDate();
    let year = date.getFullYear();
    let created = month + ' ' + day + ', ' + year;
    let dates = data.content.match(/[0-3]?[0-9].[0-3]?[0-9].(?:[0-9]{2})?[0-9]{2}/g);
    let result = {}

    if (!data.name.trim().length) {
        data.name = 'Edit Note';
    }

    dates = dates !== null ? dates : [];

    result = {
        name: data.name,
        created: created,
        category: data.category,
        content: data.content,
        dates: dates,
        archive: false,
    }

    return {
        type: 'CREATE_NOTE_TO_STATE', 
        value: result
    }
}