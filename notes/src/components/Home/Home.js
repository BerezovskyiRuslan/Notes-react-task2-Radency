import React from "react";
import { Link } from 'react-router-dom';
import NotesList from '../NotesList/NotesList.js';
import Footer from '../Footer/Footer.js';

function Home (props) {
    const { notes, category, isArchive } = props;

    return (
        
        <>  
            {/* {console.log(category)} */}
            <div className={"container-list-notes"}>
                <div className={"header-list-notes"}>
                    <h1 className={"w-16 first-header-position header-list-notes-name"}>Name</h1>
                    <h1 className={"w-16 header-list-notes-name"}>Created</h1>
                    <h1 className={"w-16 header-list-notes-name"}>Category</h1>
                    <h1 className={"w-16 header-list-notes-name"}>Content</h1>
                    <h1 className={"w-16 header-list-notes-name"}>Dates</h1>
                    <div className={"w-16 header-list-notes-name"}>
                        <button 
                            className={"header-button"} 
                            title="archive All"
                            onClick={ props.setIsArchiveToState}
                        >
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className={"header-button-icon"}
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                                <path 
                                    fillRule="evenodd"
                                    d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                                    clipRule="evenodd" 
                                />
                            </svg>
                        </button>
                        <button 
                            className={"header-button"} 
                            id="delete-all-notes" 
                            title="delete All"
                            onClick={() => { props.deleteAllNotesToState(isArchive)}}
                        >
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className={"header-button-icon"} 
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path 
                                    fillRule="evenodd"
                                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                    clipRule="evenodd" 
                                />
                            </svg>
                        </button>
                    </div>
                    <div className={"container-visible"}></div>
                </div>
                <div 
                    className={"content-list-notes"} 
                    id="notes-list"
                >
                    <NotesList 
                        notes={notes}
                        category={category}
                        isArchive={isArchive}
                        updateNoteAchive={(id) => props.updateNoteToState(id)}
                        deleteNote={(id) => props.deleteNoteToState(id)}
                    />
                    {/* {notesList} */}
                </div>
                <div 
                    className={"container-button-create"}>
                    <Link 
                        to="create"
                        className={"button-create"}
                    >
                        Create
                    </Link>
                    {/* <button 
                         
                        id="create-note"
                    > */}
                        {/* Create */}
                    {/* </button> */}
                </div>
            </div>

            <div 
                className={"container-list-notes"}
            >
                <div 
                    className={"header-list-notes"}
                >
                    <h1 
                        className={"w-50 first-header-position header-list-notes-name"}
                    >
                        Note Category
                    </h1>
                    <h1 
                        className={"header-list-notes-name w-25"}
                    >
                        Active
                    </h1>
                    <h1 
                        className={"header-list-notes-name w-25"}
                    >
                        Archive
                    </h1>
                </div>
                <div className={"content-list-notes"}>
                    <div id="footer">
                        <Footer notes={notes} category={category} />
                        {/* ${footerApp} */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;