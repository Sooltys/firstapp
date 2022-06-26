import React from "react";
import Note from "./Note";
import { Table } from 'react-bootstrap';

var noteList = [
    {
        title: "Go to the gym",
        category: "Hobby",
        content: "Leg day",
        date: new Date("2022-06-25")
    },
    {
        title: "Go to the gym",
        category: "Hobby",
        content: "Chest day",
        date: new Date("2022-07-26")
    }
];

function Notes() {
    const header = <h3>List of notes</h3>;
    return (
        <div>
            {header}
            <Table striped bordered>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Content</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <Note
                        title="Go shopping"
                        category="To do"
                        content="Buy some vegetables"
                        date={new Date("2020-12-12")}
                    />
                    {noteList.map( (note, key) => {
                        return(
                            <Note
                            key = {key}
                            title = {note.title}
                            category = {note.category}
                            content = {note.content}
                            date = {note.date}
                            />
                        );
                    })}
                </tbody>
            </Table>
        </div>
    );
};

export default Notes;