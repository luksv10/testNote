import {Component, OnInit} from '@angular/core';
import {NoteService} from "../../services/note.service";
import {Router} from "@angular/router";
import {ActivatedRoute} from "@angular/router";

class Note {
    constructor(
        public id: string,
        public title: string
    ) {
    }
}

@Component({
    selector: 'home-page',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

    constructor(private noteService: NoteService, private router: Router, private route: ActivatedRoute) {
    }

    public notes: [];

    ngOnInit(): void {
        this.getListNotes();
    }

    getListNotes() {
        const promise = new Promise((resolve, reject) => {
            this.noteService.getAllNotes().toPromise().then((res: any) => {
                    this.notes = res.map((res: any) => {
                        return new Note(res.id, res.title);
                    });
                    resolve();
                },
                err => {
                    reject(err);
                });
        });
        return promise;
    }

    editNote(note: Note) {
        this.router.navigate(['/note', note.id]);
    }
    addNewNote() {
        this.router.navigate(['/add']);
    }




}
