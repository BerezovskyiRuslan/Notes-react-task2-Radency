import React from 'react';
import {Link} from 'react-router-dom';
import '../../assets/styles/created.css';
import PageNotFound from '../PageNotFound/pageNotFound';

function CreateOrEditNote(props) {
    const { data, category, created, check = true } = props;
    const [name, setName] = React.useState(data.name || '');
    const [content, setContent] = React.useState(data.content || '');
    const [select, setSelect] = React.useState(data.category || '');

    let form = created ? {
        title: "Create New Note",
        name: "Add new note",
        placeholderTitile: "New"
    } : {
        title: "Edit",
        name: "Save edit note",
        placeholderTitile: "Edit"
    }; 
    console.log(data);
    console.log(category);
    // console.log(useParams());

    if (check) {
        return (
            <div className={"container-create"}>
                <h1 className={"container-create-title"}>
                    {form.title}
                    <Link to="/" id="close-form">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Link>
                    {/* <button id="close-form"> */}

                    {/* </button> */}
                </h1>
                <div className={"container-create-item"}>
                    <label className={"container-create-item-label"} htmlFor="name-category">Title</label>
                    <input
                        type="text"
                        id="name-create-note"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={"Default title: \"" + form.placeholderTitile + " Note\""}
                    />
                </div>
                <div className={"container-create-item"}>
                    <label className={"container-create-item-label"} htmlFor="select-category">Category</label>
                    <select
                        className={'container-create-item-select'}
                        value={select}
                        onChange={(e) => setSelect(e.target.value)}
                    >
                        {
                            category.map(item => {
                                return <option key={'category' + item.name} value={item.name}>{item.name}</option>
                            })
                        }
                    </select>
                </div>

                <div className={"container-create-item"}>
                    <textarea
                        className={"container-create-item-textarea"}
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        id="content-create-note"
                        cols="30"
                        rows="10"
                    />
                </div>
                <button className={"button-create"}>
                    {form.name}
                    {/* ${form.name} */}
                </button>
            </div>
        )
    }
    
    return <PageNotFound />
}

export default CreateOrEditNote;