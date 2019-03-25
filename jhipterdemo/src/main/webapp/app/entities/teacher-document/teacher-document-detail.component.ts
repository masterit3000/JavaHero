import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ITeacherDocument } from 'app/shared/model/teacher-document.model';

@Component({
    selector: 'jhi-teacher-document-detail',
    templateUrl: './teacher-document-detail.component.html'
})
export class TeacherDocumentDetailComponent implements OnInit {
    teacherDocument: ITeacherDocument;

    constructor(protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ teacherDocument }) => {
            this.teacherDocument = teacherDocument;
        });
    }

    previousState() {
        window.history.back();
    }
}
