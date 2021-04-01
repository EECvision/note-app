export const addNote = (notes, newNote) => {
  const existingNote = notes.find(
    note => note.id === newNote.id
  );
  if (existingNote) {
    return notes.map(note =>
      note.id === newNote.id
        ? { ...newNote }
        : note
    )
  }
  return [...notes, { ...newNote }]
};

export const deleteNote = (notes, noteId) => {
  return notes.filter(note => note.id !== noteId )
}
