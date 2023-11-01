import ExampleCheckbox from "./checkbox/index"
import ExampleRadio from "./radio/index"
import ExampleSelect from "./select/index"
import ExampleText from "./text/index"
import ExampleTextArea from "./textarea"
import ExampelFree from "./free"
import {FncText, FncCheckbox, FncTextArea} from "./free"

function Index() {
    return (
        <>
            <ExampleCheckbox/>
            <div>-------------------------------------------</div>
            <ExampleRadio/>
            <div>-------------------------------------------</div>
            <ExampleSelect/>
            <div>-------------------------------------------</div>
            <ExampleText/>
            <div>-------------------------------------------</div>
            <ExampleTextArea/>
            <p/>
            <div>-------------------------------------------</div>
            <ExampelFree/>
            <FncText/>
            <FncTextArea/>
            <FncCheckbox/>
        </>
    );
}

export default Index;