import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

root.render(
    <main>
        <Header />
        <MainContent />
        <Footer />
    </main>
);

function MainContent(){
    return (
        <ol>
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
        </ol>
    );
}

function Header(){
    return (
        <div>
            <div>
                <img src="/img/react-log.png" width="40px"/>
            </div>
            <div>
                <h1 className="header">Fun Facts (Static React Page)</h1>
            </div>
        </div>
    )
}

function Footer(){

    return (
        <div>
            Footer goes here
        </div>
    );
}