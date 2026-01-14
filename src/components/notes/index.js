import React from "react";
import { Columns } from "react-bulma-components";
import { push as Menu } from "react-burger-menu";
import "../../styles/notes.scss";

function Notes({ isOpen, setIsOpen }) {
  return (
    <div id="notes-container">
      {/* SIDEBAR */}
      <Menu
        isOpen={isOpen}
        onStateChange={(state) => setIsOpen(state.isOpen)}
        pageWrapId="notes-page-wrap"
        outerContainerId="notes-container"
        disableAutoFocus
        customBurgerIcon={false}
        customCrossIcon={false}
      >
        <p>Search...</p>
        <p>List...</p>
      </Menu>

      {/* CONTEÚDO PRINCIPAL */}
      <div id="notes-page-wrap">
        <Columns className="notes">
          <Columns.Column size={12} className="notes-editor">
            Editor...
          </Columns.Column>
        </Columns>
      </div>
    </div>
  );
}

export default Notes;
