import React, { useState } from 'react';

const ToDo = ({todo}) => {
    const [hide, setHide] = useState(false);

    const hideElements = () => {
        setHide(!hide);
    };

    return (
        <div>
            <ul>
                <li onClick={hideElements} className={hide ? 'hide' : ''}>{todo}</li>
            </ul>
        </div>
    );
};

export default ToDo;