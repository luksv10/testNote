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
var note_1 = require("../../classes/note");
var AddComponent = /** @class */ (function () {
    function AddComponent(noteService, router) {
        this.noteService = noteService;
        this.router = router;
        this.note = new note_1.Note();
        this.submitted = false;
    }
    AddComponent.prototype.ngOnInit = function () {
    };
    AddComponent.prototype.createNote = function () {
        var _this = this;
        this.noteService.createNote(this.note).toPromise().then(function () { return _this.router.navigate(['/notes']); });
    };
    AddComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.createNote();
    };
    AddComponent = __decorate([
        core_1.Component({
            selector: 'app-add',
            templateUrl: './add.component.html',
            styleUrls: ['./add.component.scss']
        }),
        __metadata("design:paramtypes", [note_service_1.NoteService,
            router_1.Router])
    ], AddComponent);
    return AddComponent;
}());
exports.AddComponent = AddComponent;
//# sourceMappingURL=add.component.js.map