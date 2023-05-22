import { useState } from 'react';

function Todo() {
    const [liValue, setliValue] = useState('')
    function changeli(e) {
        setliValue(e.target.value)
    }

    return (
        <>
            <input type='text' placeholder='Enter Your Name' onChange={changeli}></input>
            <ul><li>{liValue}</li></ul>
        </>
    )
}

export default Todo