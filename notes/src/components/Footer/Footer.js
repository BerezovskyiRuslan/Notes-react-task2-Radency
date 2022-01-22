import React from 'react';

function Footer (props) {
    const { notes, category } = props;

    function getAnalise() {
        let condition = [];

        for (let i = 0; i < category.length; i++) {

            condition[i] = {
                name: category[i].name,
                icon: category[i].icon,
                active: 0,
                archive: 0
            };

            for (let j = 0; j < notes.length; j++) {

                if (notes[j].category === category[i].name) {

                    if (notes[j].archive) {

                        condition[i]['archive'] += 1;

                        continue;
                    }

                    condition[i]['active'] = condition[i]['active'] + 1
                }
            }
        }

        return condition;
    }

    function renderFooter() {
        return getAnalise().map((item, index) => {
            return (<div className={"content-list-notes-item"} key={'analise'+index}>
                <div className={"w-50 first-content-position content-list-notes-item-text "}>
                    {item.icon}
                    <span className={"content-list-notes-item-text-span"}>{item.name}</span>
                </div>
                <div className={"w-25 content-list-notes-item-text"}>
                    <span className={"content-list-notes-item-text-span"}>{item.active}</span>
                </div>
                <div className={"w-25 content-list-notes-item-text"}>
                    <span className={"content-list-notes-item-text-span"}>{item.archive}</span>
                </div>
            </div>)
        })
    } 

    return (
        <>
            {renderFooter()}
        </>
    )
}

export default Footer;