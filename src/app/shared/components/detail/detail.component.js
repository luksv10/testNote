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
var DetailComponent = /** @class */ (function () {
    function DetailComponent(noteService, router, route) {
        this.noteService = noteService;
        this.router = router;
        this.route = route;
    }
    DetailComponent.prototype.ngOnInit = function () {
        this.getNote(+this.route.snapshot.paramMap.get('id'));
    };
    DetailComponent.prototype.getNote = function (id) {
        var _this = this;
        this.noteService.getNote(id).toPromise().then(function (data) {
            _this.note = data;
        });
    };
    DetailComponent.prototype.save = function (note) {
        var _this = this;
        this.noteService.editNote(note.id, note.title).toPromise().then(function () { return _this.router.navigate(['/notes']); });
    };
    DetailComponent.prototype.delete = function () {
        var _this = this;
        this.noteService.delete(this.note.id).toPromise().then(function () { return _this.router.navigate(['/notes']); });
    };
    DetailComponent = __decorate([
        core_1.Component({
            selector: 'detail-note',
            templateUrl: './detail.component.html',
            styleUrls: ['./detail.component.scss']
        }),
        __metadata("design:paramtypes", [note_service_1.NoteService,
            router_1.Router,
            router_1.ActivatedRoute])
    ], DetailComponent);
    return DetailComponent;
}());
exports.DetailComponent = DetailComponent;
//# sourceMappingURL=detail.component.js.map