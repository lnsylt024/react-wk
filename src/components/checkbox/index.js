function Index() {
    return (
        <div>
            <span>CheckBox</span>
            <div className={"cls_ck"}>
                <div>
                    <input type={"checkbox"} name={"ck"} value={"1"}/><span>A</span>
                </div>
                <div>
                    <input type={"checkbox"} name={"ck"} value={"2"}/><span>B</span>
                </div>
            </div>
        </div>
    );
}

export default Index;