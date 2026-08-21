import { createRoot } from "react-dom/client";


function MainContent(){
    return <h1 className="header">Project 1 - React Learning - Fun Facts (Static React Page)</h1>
}

const root = createRoot(document.getElementById("root"));

root.render(
    <div>
        <div>
            <MainContent />
            </div>
        <div>
            <UnorderedListOnPage />
        </div>
    </div>
);

function UnorderedListOnPage(){
    return (
        <ul>
            <li>
                1st Option on the Page
            </li>
            <li>
                1st Option on the Page
            </li>
            <li>
                1st Option on the Page
            </li>
            <li>
                1st Option on the Page
            </li>
        </ul>
    );
}