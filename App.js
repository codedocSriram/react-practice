const childDiv1 = React.createElement(
    "div",
    {},
    React.createElement("label", {}, "Name: "),
    React.createElement("input", { type: "text" })
);
const childDiv2 = React.createElement(
    "div",
    {},
    React.createElement("label", {}, "Email: "),
    React.createElement("input", { type: "email" })
);
const buttonElement = React.createElement("button", {}, "Submit");
const parentDiv = React.createElement("div", {}, [
    childDiv1,
    childDiv2,
    buttonElement,
]);
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(parentDiv);
