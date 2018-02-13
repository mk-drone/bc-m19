

const addComment = (text) => {
    return {
        type: 'ADD_COMMENT',
        text: text,
        id: uuid.v4(),
    };
}

const editComment = (id, text) => {
    return {
        type: 'EDIT_COMMENT',
        text: text,
        id: id,
    }
}

const deleteComment = (id) => {
    return {
        type: 'DELETE_COMMENT',
        id: id,
    };
}

const thumbUp = (id) => {
    return {
        type: 'THUMBUP_COMMENT',
        id: id,
    };
}

const thumbDown = (id) => {
    return {
        type: 'THUMBDOWN_COMMENT',
        id: id,
    };
}
