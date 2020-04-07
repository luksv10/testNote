import {Component, Input, OnInit} from '@angular/core';
import {NoteService} from '../../services/note.service';
import {Router} from '@angular/router';
import {Note} from "../../classes/note";


@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
    note: Note = new Note();
    submitted = false;

    constructor(private noteService: NoteService,
                private router: Router) { }

    ngOnInit() {
    }

    createNote() {
        this.noteService.createNote(this.note).toPromise().then(() => this.router.navigate(['/notes']));
    }
    onSubmit() {
        this.submitted = true;
        this.createNote();
    }

}
