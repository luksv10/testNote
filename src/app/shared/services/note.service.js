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
var http_1 = require("@angular/common/http");
var i0 = require("@angular/core");
var i1 = require("@angular/common/http");
var mainUrl = 'https://private-anon-016584b054-note10.apiary-mock.com/notes';
var NoteService = /** @class */ (function () {
    function NoteService(http) {
        this.http = http;
    }
    NoteService.prototype.getAllNotes = function () {
        return this.http.get(mainUrl);
    };
    NoteService.prototype.getNote = function (id) {
        return this.http.get(mainUrl + "/" + id);
    };
    NoteService.prototype.editNote = function (id, title) {
        return this.http.put(mainUrl + "/" + id, title);
    };
    NoteService.prototype.createNote = function (note) {
        console.log(note);
        return this.http.post(mainUrl, note);
    };
    NoteService.prototype.delete = function (id) {
        return this.http.delete(mainUrl + "/" + id);
    };
    NoteService.ngInjectableDef = i0.defineInjectable({ factory: function NoteService_Factory() { return new NoteService(i0.inject(i1.HttpClient)); }, token: NoteService, providedIn: "root" });
    NoteService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], NoteService);
    return NoteService;
}());
exports.NoteService = NoteService;
//# sourceMappingURL=note.service.js.map