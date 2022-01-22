import React from "react";
import {Link} from "react-router-dom";
import PageNotFound from "../PageNotFound/pageNotFound";
function NotesItem (props) {
    const { data, categoryIcon, check = true } = props;
    
    if (check) {
        return (
            <div
                className={"container-note-item"}
            >
                <div
                    className={'content-list-notes-item-full'}
                >
                    <div
                        className={"content-list-notes-item-full-text"}
                    >
                        <div
                            className={"content-list-notes-item-full-name-category"}
                        >
                            <div
                                className={"content-list-notes-item-name-icon-container"}
                            >
                                {categoryIcon}
                            </div>
                            <h3>
                                {data.name}
                            </h3>
                            <span>|</span>
                            <span
                                className={"content-list-notes-item-full-name-category-span"}
                            >
                                {data.category}
                            </span>
                            <span>|</span>
                            <span
                                className={"content-list-notes-item-full-name-category-span"}
                            >
                                {"State: " + (data.archive ? "Archive" : "Active")}
                            </span>
                        </div>

                        <p>
                            {data.created}
                            <Link to="/">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                </svg>
                            </Link>
                        </p>
                    </div>
                    <div
                        className={"content-list-notes-item-full-text-pre"}
                    >
                        <pre id="render">{data.content}</pre>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <PageNotFound />
    )
    
}

export default NotesItem;