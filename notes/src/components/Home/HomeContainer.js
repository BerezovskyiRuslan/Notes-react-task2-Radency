import { connect } from "react-redux";

import Home from "./Home";
import { setIsArchive } from "../../state/reducer/isArchive/isArchive.js";
import { 
    addOrDeleteNoteInState, 
    deleteNoteInState,
    deleteAllNotesInState
} from "../../state/reducer/notes/notes";

const notesData = (state) => {
    return {
        notes: state.notes,
        category: state.category,
        isArchive: state.isArchive
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setIsArchiveToState: () => dispatch(setIsArchive()),
        updateNoteToState: (id) => dispatch(addOrDeleteNoteInState(id)),
        deleteNoteToState: (id) => dispatch(deleteNoteInState(id)),
        deleteAllNotesToState: (state) => dispatch(deleteAllNotesInState(state))
    }
}

const HomeContainer = connect(notesData, mapDispatchToProps)(Home);

export default HomeContainer;