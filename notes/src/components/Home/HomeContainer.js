import { connect } from "react-redux";

import Home from "./Home";
import { setIsArchive } from "../../state/reducer/isArchive/isArchive.js"

const notesData = (state) => {
    return {
        notes: state.notes,
        category: state.category,
        isArchive: state.isArchive
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setIsArchiveToState: () => dispatch(setIsArchive())
    }
}

const HomeContainer = connect(notesData, mapDispatchToProps)(Home);

export default HomeContainer;