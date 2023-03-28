import { BrowserRouter, Route, Routes } from "react-router-dom";
const SampleImports = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route
                    exact
                    path="/sample/sampleedit"
                />
            </Routes>
        </BrowserRouter>
    );
}
export default SampleImports