function Index() {
    return (
        <div>
            <span>Radio</span>
            <div className={"cls_rd"}>
                <div>
                    <input type={"radio"} name={"rd"} value={"1"}/><span>A</span>
                </div>
                <div>
                    <input type={"radio"} name={"rd"} value={"2"}/><span>B</span>
                </div>
            </div>
        </div>
    );
}

export default Index;