
import React, { createContext } from "react";

export const Filecontext = createContext();

const filestate = (props) => {
    const files = [
        { name: "test1", id: 1 },
        { name: "test2", id: 2 },
    ];
    const file = {
        name: "haha",
        type: "js",
        id: "test",
    };
    return (
        <>
            <Filecontext.Provider value={{ file, files }}>
                {props.children}
            </Filecontext.Provider>
        </>
    );
};

export default filestate;
