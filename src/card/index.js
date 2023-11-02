import {SubCardOne,SubCardTwo,SubCardThree} from "./sub"

function Card({children}) {
    return (
        <div>
            {children}
        </div>
    );
}

function Index() {
    const obj = {
        "name":"fenghuang",
        "age":44
    }
    return (
        <Card>
            <SubCardOne name={"litao"}/>
            <SubCardTwo name={"ABC"}/>
            <SubCardThree obj={obj}/>
        </Card>
    );
}

export default Index;