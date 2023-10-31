import React, {useCallback, useState} from "react";


function MyComponent() {
    const [value, setValue] = useState("Change me");
    const handleChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>(event => {
        setValue(event.currentTarget.value);
    }, [setValue]);
    return (
        <>
            <input type={"text"} onChange={handleChange}/>
            <p>Value:{value}</p>
        </>
    );
}

function MyComponent2() {
    const [value, setValue] = useState("Change me");

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setValue(event.currentTarget.value);
    }

    return (
        <>
            <input type={"text"} onChange={handleChange}/>
            <p>Value:{value}</p>
        </>
    );
}

function Index() {

    return (
        <div>
            <MyComponent/>
            <MyComponent2/>
        </div>
    );
}

export default Index;