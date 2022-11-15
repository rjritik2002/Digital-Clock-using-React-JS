import React, { useState } from 'react';

const App = () => {
    let newTime = new Date().toLocaleTimeString();
    const [ctime, setCtime] = useState(newTime);

    const UpdateTime = () => {
        let newTime = new Date().toLocaleTimeString();
        setCtime(newTime);
    }

    setInterval(UpdateTime, 1000);
    return (
        <>
            <div className="container">
                <h1 className="heading_style">{ctime}</h1>
                <button className="btn" onClick={UpdateTime}>GET TIME</button>
            </div>
        </>
    )
}

export default App;