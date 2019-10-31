import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import Message from "./Message";
import Segment from "./Segment";

const App = () => {
    return (
        <div className="ui container comments">
            <Message
                header="Changes in Service"
                messageBody="We just update your privacy police here to better service our customer."
            />

            <Message header="Attention!" messageBody="We did an update." />

            <Segment>
                <div className="ui icon header">
                    <i className="pdf file outline icon"></i>
                    No document are listed for this customer.
                    <div className="ui primary button">Add document</div>
                </div>
            </Segment>

            <Segment>
                <h4 className="ui header">For your information</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </Segment>

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
