import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector("#root"));
const root1 = createRoot(document.querySelector("#root1"));
root1.render(<h1>Page Title</h1>);

root.render(<ul>
    <li>
        1st Item
    </li>
    <li>
        2nd Item
    </li>
    <li>
        3rd Item
    </li>
    <li>
        4th Item
    </li>
    <li>
        5th Item
    </li>
</ul>);