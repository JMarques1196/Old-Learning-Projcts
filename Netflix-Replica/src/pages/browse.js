import { BrowserContainer } from "../containers/browse";
import { useContent } from "../hooks"
import selectionFilter from "../utils/selection-filter";

export default function Browse(){

    const {series}  = useContent('series');
    const {films} = useContent('films');
    const slides = selectionFilter({series, films}); // selection filter returns 2 objects with organized series / films by genre
    

    return <BrowserContainer slides={slides} />;
        
    
}