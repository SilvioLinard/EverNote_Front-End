import React, { useState } from "react";
import { Columns, Form } from "react-bulma-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const { Input } = Form;

function Search({ searchNotes, fetchNotes }) {
    const [query, setQuery] = useState("");

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            searchNotes(query);
        }
    };

    return (
        <Columns className="is-vcentered" breakpoint="mobile">
            <Columns.Column size={9} offset={1}>
                <Input
                    type="text"
                    name="query"
                    value={query}
                    placeholder="Search note..."
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </Columns.Column>

            <Columns.Column mobile={2} size={1}>
                <button
                    type="button"
                    className="button is-white"
                    onClick={() => {
                        fetchNotes();
                        setQuery("");
                    }}
                >
                    <FontAwesomeIcon icon={faTimes} color="grey" />
                </button>
            </Columns.Column>
        </Columns>
    );
}

export default Search;
