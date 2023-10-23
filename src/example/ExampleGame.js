import {useState} from "react";

function Square({value, onSquareClick}) {
    // const handleClick = () => {
    //     console.info("clicked",value)
    // }
    return (
        <button onClick={onSquareClick}>{value}</button>
    );
}

// function Square() {
//     const [value,setValue] =useState(null);
//     const handleClick = () => {
//         setValue("X");
//     }
//     return (
//         <button onClick={handleClick}>{value}</button>
//     );
// }


function Index() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext,steXIsNext] =useState(true);

    const handleClick = (param) => {
        if(squares[param]){
            return;
        }

        console.info("clicked")
        //创建副本
        const nextSquares = squares.slice();

        if(xIsNext){
            nextSquares[param] = 'X';
        }else {
            nextSquares[param] = 'O';
        }
        setSquares(nextSquares);
        steXIsNext(!xIsNext);
    }
    return (
        <>
            <div>ssss</div>
            {/* <div> */}
            {/*     <button>1</button> */}
            {/*     <button>2</button> */}
            {/*     <button>3</button> */}
            {/* </div> */}
            {/* <div> */}
            {/*     <button>4</button> */}
            {/*     <button>5</button> */}
            {/*     <button>6</button> */}
            {/* </div> */}
            {/* <div> */}
            {/*     <button>7</button> */}
            {/*     <button>8</button> */}
            {/*     <button>9</button> */}
            {/* </div> */}

            {/* <div> */}
            {/*     <Square value="1"/> */}
            {/*     <Square value="2"/> */}
            {/*     <Square value="3"/> */}
            {/* </div> */}
            {/* <div> */}
            {/*     <Square value="4"/> */}
            {/*     <Square value="5"/> */}
            {/*     <Square value="6"/> */}
            {/* </div> */}
            {/* <div> */}
            {/*     <Square value="7"/> */}
            {/*     <Square value="8"/> */}
            {/*     <Square value="9"/> */}
            {/* </div> */}

            <div>
                <Square value={squares[0]} onSquareClick={()=>handleClick(0)}/>
                <Square value={squares[1]} onSquareClick={()=>handleClick(1)}/>
                <Square value={squares[2]} onSquareClick={()=>handleClick(2)}/>
            </div>
            <div>
                <Square value={squares[3]} onSquareClick={()=>handleClick(3)}/>
                <Square value={squares[4]} onSquareClick={()=>handleClick(4)}/>
                <Square value={squares[5]} onSquareClick={()=>handleClick(5)}/>
            </div>
            <div>
                <Square value={squares[6]} onSquareClick={()=>handleClick(6)}/>
                <Square value={squares[7]} onSquareClick={()=>handleClick(7)}/>
                <Square value={squares[8]} onSquareClick={()=>handleClick(8)}/>
            </div>
        </>
    );

}

Index.displayName="ExampleGame";

export default Index;