import {v4 as uuidV4} from "uuid";

export const todosArray = [
    {
        id: uuidV4(),
        text: "goto gym",
        isCompleted : false,

    },
    {
        id: uuidV4(),
        text: "do laundry",
        isCompleted: false,
    },
    {
        id: uuidV4(),
        text: "food shopping",
        isCompleted: false,
    },
    {
        id: uuidV4(),
        text: "do homework",
        isCompleted: false,
    }
];