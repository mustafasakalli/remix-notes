import { redirect } from "@remix-run/node";
import NewNote, { links as newNoteLinks } from "../../components/NewNote";
import { getStoredNotes, storeNotes } from "../../data/notes";

export default function NotesPage() {
    return (
        <main>
            <NewNote />
        </main>
    );
}

//This action fucntion is special.This will work on server side
export async function action({request}){
    const formData = await request.formData()
    const noteData = {
        //comes from form elements names
        title: formData.get("title"),
        content: formData.get("content")
    }

    const existingNotes = await getStoredNotes()
    noteData.id = new Date().toISOString();
    const updatedNotes = existingNotes.concat(noteData);

    await storeNotes(updatedNotes);

    return redirect('/notes');
}

export function links() {
    return [...newNoteLinks()]
}