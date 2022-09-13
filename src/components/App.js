import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function createnotes(note) {
  const { key, title, content } = note;
  return <Note key={key} title={title} content={content} />;
}
function App() {
  return (
    <div>
      <Header />
      {notes.map(createnotes)}
      <Footer />
    </div>
  );
}

export default App;
