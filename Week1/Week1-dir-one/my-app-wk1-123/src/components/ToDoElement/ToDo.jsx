import React from "react";
import CheckBox from "./CheckBox";
import Card from "../UIElement/Card";
import './ToDo.css';

const ToDo = (props) => {

    return (
        <Card className="unorderedList">
            <ul>
                {
                    props.arrayList.map(element => {
                        return (
                            <Card className="listItem">
                                <li key={element.id}>
                                    <CheckBox/>
                                    {element.title}
                                </li>
                            </Card>
                        )
                    })
                }
            </ul>
            </Card>
    )

};

export default ToDo;