//const heading = React.createElement("h1", {id:"heading",xyz:"abc"}, "Hello World from React!");

// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


//creating a nested structure in react ---

{/* <div id="parent">
    <div id="child">
        <h1>I'm h1 tag</h1>
    </div>
</div> */}


//example of one child
// const parent = React.createElement(
//     "div",
//     {id:"parent"},
//     React.createElement(
//         "div",
//         {id:"child"},
//         React.createElement("hi",{},"I'm an h1 tag")

//     )
// )

//example of array of children--


const parent = React.createElement(
    "div",
    {id:"child"},
    React.createElement(
        "div",
        {id:"child"},
        [React.createElement("hi",{},"I'm an h1 tag"),
        React.createElement("hi",{},"I'm an h1 tag")],
        [React.createElement("hi",{},"I'm an h1 tag"),
            React.createElement("hi",{},"I'm an h1 tag")]

    )
)



console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);