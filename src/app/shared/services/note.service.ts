import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Note} from "../classes/note";



const mainUrl = 'https://private-anon-016584b054-note10.apiary-mock.com/notes';

@Injectable({
    providedIn: 'root'
})
export class NoteService {
    constructor(private http: HttpClient) {}

    getAllNotes() {
        return this.http.get(mainUrl);
    }

    getNote(id: number) {
        return this.http.get(`${mainUrl}/${id}`);
    }

    editNote(id:number, title: string) {
        return this.http.put(`${mainUrl}/${id}`, title);
    }

    createNote(note: Note) {
        console.log(note);
        return this.http.post(mainUrl, note);
    }

    delete(id: number) {
        return this.http.delete(`${mainUrl}/${id}`);
    }

}
