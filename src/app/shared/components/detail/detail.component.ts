import {Component, Input, OnInit} from '@angular/core';
import {NoteService} from '../../services/note.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Note} from "../../classes/note";



@Component({
    selector: 'detail-note',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

    constructor(private noteService: NoteService,
                private router: Router,
                private route: ActivatedRoute,
                ) { }

                note: any;

    ngOnInit() {
        this.getNote(+this.route.snapshot.paramMap.get('id'));
    }

     getNote(id: number) {
        this.noteService.getNote(id).toPromise().then((data:any) => {
        this.note = data;
        });
    }

    save(note: Note): void {
        this.noteService.editNote(note.id, note.title).toPromise().then(() => this.router.navigate(['/notes']));
    }

    delete(): void {
        this.noteService.delete(this.note.id).toPromise().then(() => this.router.navigate(['/notes']));
    }
}
