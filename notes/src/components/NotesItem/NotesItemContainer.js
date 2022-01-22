import { connect } from 'react-redux';

import NotesItem from './NotesItem';

function getNote(state) {
    let id = window.location.pathname.replace('/', '');
    let result = state.notes.filter(item => String(item.id) === id);

    if (!result.length) {
        return {
            data: {},
            categoryIcon: {},
            check: false
        }
    }

    let categoryIcon = state.category.filter(item => result[0].category === item.name)[0].icon;
    
    return {
        data: result[0],
        categoryIcon: categoryIcon,
        check: true
    };
}

const mapStateToProps = (state) => {
    let obj = getNote(state);
    
    return {
        data: obj.data,
        categoryIcon: obj.categoryIcon,
        check: obj.check
    }
}


const notesItem = connect(mapStateToProps, null)(NotesItem);

export default notesItem;