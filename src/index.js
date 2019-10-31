import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import Message from "./Message";

const App = () => {
    return (
        <div className="ui container comments">
            <Message
                header="Changes in Service"
                messageBody="We just update your privacy police here to better service our customer."
            />

            <Message header="Attention!" messageBody="We did an update." />
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure want to do this?
                </div>
            </ApprovalCard>

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
