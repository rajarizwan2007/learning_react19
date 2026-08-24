import { createRoot } from "react-dom/client";


function MainContent(){
    return <h1 className="header">Fun Facts (Static React Page)</h1>
}

const root = createRoot(document.getElementById("root"));

root.render(
    <main>
        <div>
            <img src="/img/react-log.png" width="40px"/>
                <MainContent />
            </div>
        <div>
            <UnorderedListOnPage />
        </div>
    </main>
);

function UnorderedListOnPage(){
    return (
        <ul>
            <li>
                Was first release in 2013.
            </li>
            <li>
                Was origninally created by Jordan Walke.
            </li>
            <li>
                Has well over 200k stars on GitHub.
            </li>
            <li>
                Is maintained by Meta.
            </li>
             <li>
                Powers thousands of enterprice apps, including mobile apps.
            </li>
        </ul>
    );
}