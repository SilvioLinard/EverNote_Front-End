import React from "react";
import { Heading, Tag, Columns } from "react-bulma-components";
import Moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function ListNotes({
  notes = [],
  selectNote,
  current_note,
  createNote,
  deleteNote, 
}) {
  return (
    <>
      <div className="notes-header">
        <Heading size={6}>
          {notes.length} <span className="notes-text">Notes</span>
        </Heading>

        <button className="add-note-btn" onClick={createNote}>
          + Note
        </button>
      </div>

      <div className="notes-list">
        {notes.map((item) => {
          const isActive = item._id === current_note?._id;

          return (
            <div
              key={item._id}
              className={`note-item ${isActive ? "is-active" : ""}`}
              onClick={() => selectNote(item._id)}
            >
              <div className="note-content">
                <p className="note-title">
                  {(item.title || "")
                    .replace(/(<([^>]+)>)/gi, "")
                    .substring(0, 20)}
                </p>

                <p className="note-preview">
                  {(item.body || "")
                    .replace(/(<([^>]+)>)/gi, "")
                    .substring(0, 40)}
                </p>
              </div>

              {item.created_at && (
                <Tag size="small" className="note-date">
                  {Moment(item.created_at).format("DD/MM")}
                </Tag>
              )}

              <Columns.Column size={2} className="has-text-right">
                <FontAwesomeIcon
                  icon={faTrash}
                  className="has-text-grey is-clickable"
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteNote(item);
                  }}
                />
              </Columns.Column>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ListNotes;
