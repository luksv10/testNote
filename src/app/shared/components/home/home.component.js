"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var note_service_1 = require("../../services/note.service");
var router_1 = require("@angular/router");
var router_2 = require("@angular/router");
var Note = /** @class */ (function () {
    function Note(id, title) {
        this.id = id;
        this.title = title;
    }
    return Note;
}());
var HomeComponent = /** @class */ (function () {
    function HomeComponent(noteService, router, route) {
        this.noteService = noteService;
        this.router = router;
        this.route = route;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getListNotes();
    };
    HomeComponent.prototype.getListNotes = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.noteService.getAllNotes().toPromise().then(function (res) {
                _this.notes = res.map(function (res) {
                    return new Note(res.id, res.title);
                });
                resolve();
            }, function (err) {
                reject(err);
            });
        });
        return promise;
    };
    HomeComponent.prototype.editNote = function (note) {
        this.router.navigate(['/note', note.id]);
    };
    HomeComponent.prototype.addNewNote = function () {
        this.router.navigate(['/add']);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home-page',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.scss']
        }),
        __metadata("design:paramtypes", [note_service_1.NoteService, router_1.Router, router_2.ActivatedRoute])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map