import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author="Jimmy"
                    time="Today at 16:00PM"
                    content="Nice Tutorial!"
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Natali"
                    time="Today at 18:00PM"
                    content="Nice Post Bro."
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Erick"
                    time="Today at 19:00PM"
                    content="How is it possible?"
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));
