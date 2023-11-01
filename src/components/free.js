export function FncCheckbox() {
    return (
        <div>
            <input type={"checkbox"} name={"ck"} value={"1"}/>A
            <input type={"checkbox"} name={"ck"} value={"2"}/>B
        </div>
    );
}

export function FncTextArea() {
    return (
        <div>
            <textarea/>
        </div>
    );
}

export function FncText() {
    return (
        <div>
            <input type={"text"} placeholder={"Please input...."}/>
        </div>
    );
}

function Index() {
    return (
        <>
            <span>默认</span>
        </>
    );
}

export default Index;