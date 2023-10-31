import {createContext, useContext, useMemo} from "react";

type ComplexObject = { kind: string };

//类型是ComplexObject或Null
const Context = createContext<ComplexObject | null>(null);

const useGetComplexObject = () => {
    const obj = useContext(Context);
    if (!obj) {
        throw new Error("XXXXXXXXXXXXXXXXXX");
    }
    return obj;
}

function MyComponent() {
    const obj = useGetComplexObject();
    return (
        <div>
            <p>Current object: {obj.kind}</p>
        </div>
    );
}

function Index() {
    const obj = useMemo(() => ({kind: "complex"}), []);
    return (
        <Context.Provider value={obj}>
            <MyComponent/>
        </Context.Provider>
    );
}

export default Index;