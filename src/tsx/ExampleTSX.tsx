import {useState} from "react";

interface MyButtonProps {
    title: string;
    disabled: boolean;
}

function MyButton({title, disabled}: MyButtonProps) {
    return <button disabled={disabled}>{title}</button>;
}

function Index() {
    type customType = "idle" | "loading" | "success" | "error";
    const [status,setStatus] = useState<customType>("idle");

    type RequestState=
        | {status: "idle"}
        | {status: "loading"}
        | {status: "success", data: any}
        | {status: "error", error:Error};
    const [reqState,setReqState] = useState<RequestState>({status:"loading"})

    return (
        <div>
            <h1>Welcom to my tsx! {status} {reqState.status}</h1>
            <MyButton title={"My button"} disabled={true}/>
        </div>
    );
}

export default Index;
