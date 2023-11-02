export function SubCardOne({name}) {
    return (
        <div>
            <span>Sub One, {name}</span>
        </div>
    );
}

export function SubCardTwo({name}) {
    return (
        <div>
            <span>Sub Two, {name}</span>
        </div>
    );
}

export function SubCardThree({obj}) {
    return(
        <div>
            <span>{obj.name}</span><br/>
            <span>{obj.age}</span><br/>
        </div>
    );
}