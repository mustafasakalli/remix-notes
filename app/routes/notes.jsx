import NewNote, { links as newNoteLinks } from "../../components/NewNote";

export default function NotesPage() {
    return (
        <main>
            <NewNote />
        </main>
    );
}

//This action fucntion is special.This will work on server side
export function action() {
    

}

export function links() {
    return [...newNoteLinks()]
}