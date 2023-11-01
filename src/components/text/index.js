
function Index(){
    return(
        <div>
            <span>InputText</span>
            <div className={"cls_input"}>
                <input type={"text"} name={"tx"} placeholder={"Please input..."} maxLength={20}/>
            </div>
        </div>
    );
}

export default Index;