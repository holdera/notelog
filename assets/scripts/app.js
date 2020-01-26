

const noteForm = document.querySelector('form');
const noteArea = document.querySelector('input[type="text"]');

const addNote = document.querySelector('.btn__add');

const noteItems = document.querySelector('ul.notes');
const notes = JSON.parse(localStorage.getItem('notes')) || [];

function addNotetoList(e){
	e.preventDefault();
	const text = noteArea.value;
	const newNote = {
		text,
		done: false
	};
	if ( noteArea.value == '' || noteArea.value == null) {
		alert("Please fill in the form")
		
	} else {
		notes.push(newNote);
		viewNotes(notes, noteItems);
		localStorage.setItem('notes', JSON.stringify(notes));
		noteForm.reset();
	}
}

function viewNotes(notes = [], list) {
	list.innerHTML = notes.map((note, i) => {
		return `<li><input data-notelist="${i}" type="checkbox" name="note" id="note${i}" ${ note.done ? 'checked' : '' } /><label for="note${i}">${note.text}</label></li>`;
	}).join('');
}

function selectedItem(e){

	if ( !e.target.matches('input') ) return;

	if ( e.target.checked ) {
		const checkedBox = notes.indexOf(e.srcElement);
		console.log(checkedBox);
		notes.splice(checkedBox);
		console.log(notes);
	}

	viewNotes(notes, noteItems);
	localStorage.setItem('notes', JSON.stringify(notes));
	noteForm.reset();

}


addNote.addEventListener('click', addNotetoList);
noteItems.addEventListener('click', selectedItem);

viewNotes(notes, noteItems);
