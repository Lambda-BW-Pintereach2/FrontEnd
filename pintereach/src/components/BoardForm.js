import React, { useState } from 'react';

const BoardForm = (props) => {

    const [newBoards, setNewBoards] = useState({
        title: "",
    });

    const handleChanges = event => {
        setNewBoards({...newBoards, [event.target.name]: event.target.value});
    };

    const submitForm = event => {
        event.preventDefault();
        props.addNewBoard(newBoards);
        setNewBoards({ title: ""});
    };


    return (
        <div className="board-form">
            <form onSubmit={submitForm}>
                <label htmlFor="title">New Board</label>
                <input
                    type="text"
                    placeholder="Give your board a name"
                    id="title"
                    name="title"
                    value={newBoards.title}
                    onChange={handleChanges}
                />
                <button type="submit">Add</button>
            </form>

        </div>
    );
};
    

export default BoardForm;