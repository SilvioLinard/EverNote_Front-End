import React, { useState, useEffect } from "react";
import { Columns } from "react-bulma-components";
import { push as Menu } from "react-burger-menu";
import "../../styles/notes.scss";

import ListNotes from "../notes/list";
import Editor from "../notes/editor";
import Search from "../notes/search";
import NoteService from "../../services/notes";

function Notes({ isOpen, setIsOpen }) {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await NoteService.index();
      const data = response?.data || [];

      if (data.length) {
        const ordered = [...data].reverse();
        setNotes(ordered);
        setCurrentNote(ordered[0]);
      } else {
        setNotes([]);
        setCurrentNote(null);
      }
    } catch (err) {
      console.error("Erro ao buscar notas:", err);
    }
  };

  const createNote = async () => {
    try {
      await NoteService.create();
      fetchNotes();
    } catch (err) {
      console.error("Erro ao criar nota:", err);
    }
  };

  const deleteNote = async (note) => {
    if (currentNote?._id === note._id) {
      setCurrentNote(null);
    }

    try {
      await NoteService.delete(note._id);
      fetchNotes();
    } catch (err) {
      console.error("Erro ao deletar nota:", err);
    }
  };

  const updateNote = async (oldNote, params) => {
    try {
      const updatedNote = await NoteService.update(oldNote._id, params);
      const index = notes.indexOf(oldNote);

      const newNotes = [...notes];
      newNotes[index] = updatedNote.data;

      setNotes(newNotes);
      setCurrentNote(updatedNote.data);
    } catch (err) {
      console.error("Erro ao atualizar nota:", err);
    }
  };

  const searchNotes = async (query) => {
    try {
      const response = await NoteService.search(query);
      setNotes(response.data);
    } catch (err) {
      console.error("Erro ao buscar notas:", err);
    }
  };

  const selectNote = (id) => {
    if (currentNote?._id === id) return;

    const note = notes.find((n) => n._id === id);
    if (note) setCurrentNote(note);
  };

  return (
    <div id="notes-container">
      <Menu
        isOpen={isOpen}
        onStateChange={(state) => setIsOpen(state.isOpen)}
        pageWrapId="notes-page-wrap"
        outerContainerId="notes-container"
        disableAutoFocus
        customBurgerIcon={false}
        customCrossIcon={false}
      >
        <div className="notes-search">
          <Search
            searchNotes={searchNotes}
            fetchNotes={fetchNotes}
          />
        </div>

        <ListNotes
          notes={notes}
          selectNote={selectNote}
          current_note={currentNote}
          deleteNote={deleteNote}
          createNote={createNote}
        />
      </Menu>

      <div id="notes-page-wrap">
        <Columns className="notes">
          <Columns.Column size={12} className="notes-editor">
            <Editor
              note={currentNote}
              updateNote={updateNote}
            />
          </Columns.Column>
        </Columns>
      </div>
    </div>
  );
}

export default Notes;
