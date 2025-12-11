import React, { useState, Fragment } from "react";
import HeaderLogged from "../../components/header_logged";
import { Section, Container, Form, Button } from "react-bulma-components";
import "../../styles/notes.scss";

function NotesScreen() {
  const [selectedNote, setSelectedNote] = useState(null);
  const [editorContent, setEditorContent] = useState("");

  const handleSelectNote = (note) => {
    setSelectedNote(note);
    setEditorContent(`Conteúdo da ${note}`); 
  };

  return (
    <Fragment>
      <HeaderLogged onSelectNote={handleSelectNote} />

      <Section style={{ marginTop: "4rem" }}>
        <Container>
          {selectedNote ? (
            <Form.Field>
              <Form.Label>{selectedNote}</Form.Label>
              <Form.Control>
                <Form.Textarea
                  value={editorContent}
                  onChange={(e) => setEditorContent(e.target.value)}
                  placeholder="Edite sua nota aqui..."
                  style={{ minHeight: "300px" }}
                />
              </Form.Control>

              <Button
                color="primary"
                className="mt-3"
                onClick={() => alert("Nota salva!")}
              >
                Salvar
              </Button>
            </Form.Field>
          ) : (
            <p>Selecione uma nota no menu lateral para editar.</p>
          )}
        </Container>
      </Section>
    </Fragment>
  );
}

export default NotesScreen;
