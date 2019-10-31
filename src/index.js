import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail
                author="Jimmy"
                time="Today at 16:00PM"
                comments="Nice Tutorial!"
            />
            <CommentDetail
                author="Natali"
                time="Today at 18:00PM"
                comments="Nice Post Bro."
            />
            <CommentDetail
                author="Erick"
                time="Today at 19:00PM"
                comments="How is it possible?"
            />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));
