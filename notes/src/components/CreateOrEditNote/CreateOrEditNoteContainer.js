import { connect } from 'react-redux';

import CreateOrEditNote from './CreateOrEditNote';

let created = true;
let check = true
let id = 0;

function checkPath () {
    if (window.location.pathname === '/create') {
        created = true;
        return;
    }
    id = window.location.pathname.replace('/edit/','');
    created = false;
    console.log(id);
}
function getNote(notes, id) {
    let result = notes.filter(item => String(item.id) === id)
    if (!result.length) {
        check = false;
        return {};
    }
    return result[0];
}

const mapStatetoProps = (state) => {

    checkPath();
    
    return {
        data: created ? {} : getNote(state.notes, id),
        category: state.category,
        created: created,
        check: check
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const createOrEditNote = connect(mapStatetoProps, mapDispatchToProps)(CreateOrEditNote);

export default createOrEditNote;