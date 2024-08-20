let notes = JSON.parse(localStorage.getItem('notes')) || [];

function addNote() {
    const noteInput = document.getElementById('note-input');
    const noteText = noteInput.value;

    if (noteText) {
        notes.push(noteText);
        noteInput.value = '';
        saveNotes();
        renderNotes();
    }
}

function editNote(index) {
    const newNote = prompt("Редактировать заметку:", notes[index]);
    if (newNote !== null) {
        notes[index] = newNote;
        saveNotes();
        renderNotes();
    }
}

function deleteNote(index) {
    notes.splice(index, 1);
    saveNotes();
    renderNotes();
}

function saveNotes() {
    localStorage.setItem('notes', JSON.stringify(notes));
}

function renderNotes() {
    const notesList = document.getElementById('notes-list');
    notesList.innerHTML = '';

    notes.forEach((note, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${note} 
            <button onclick="editNote(${index})">Изменить</button>
            <button onclick="deleteNote(${index})">Удалить</button>`;
        notesList.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', renderNotes);
