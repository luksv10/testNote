import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NoteService } from './note.service';
import describe = Mocha.describe;
import beforeEach = Mocha.beforeEach;
import it = Mocha.it;

describe('NoteService', () => {
    let noteService: NoteService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
            ],
            providers: [
                NoteService
            ],
        });

        noteService = TestBed.get(NoteService);
        httpMock = TestBed.get(HttpTestingController);
    });
    it(``, async(inject([HttpTestingController, NoteService],
        (httpClient: HttpTestingController, noteService: NoteService) => {

            const noteItems = [
                {
                    "id": 1,
                    "title": "Jogging in park"
                },
                {
                    "id": 2,
                    "title": "Pick-up posters from post-office"
                }
            ];


            noteService.getAllNotes()
                .subscribe((posts: any) => {

                });

            let req = httpMock.expectOne('https://private-anon-016584b054-note10.apiary-mock.com/notes');

            req.flush(noteItems);
            httpMock.verify();

        })));
});
