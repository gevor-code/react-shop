import { createRoutesFromElements, Route} from "react-router";
import { createBrowserRouter} from "react-router-dom";
import App from "../App";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<App />} />
            <Route path="/test" element={<h1>Test</h1>} />
        </>
    )
);