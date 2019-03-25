import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiAlertService } from 'ng-jhipster';
import { ITeacherDocument } from 'app/shared/model/teacher-document.model';
import { TeacherDocumentService } from './teacher-document.service';
import { ITeacher } from 'app/shared/model/teacher.model';
import { TeacherService } from 'app/entities/teacher';
import { IDocument } from 'app/shared/model/document.model';
import { DocumentService } from 'app/entities/document';

@Component({
    selector: 'jhi-teacher-document-update',
    templateUrl: './teacher-document-update.component.html'
})
export class TeacherDocumentUpdateComponent implements OnInit {
    teacherDocument: ITeacherDocument;
    isSaving: boolean;

    teachers: ITeacher[];

    documents: IDocument[];

    constructor(
        protected jhiAlertService: JhiAlertService,
        protected teacherDocumentService: TeacherDocumentService,
        protected teacherService: TeacherService,
        protected documentService: DocumentService,
        protected activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ teacherDocument }) => {
            this.teacherDocument = teacherDocument;
        });
        this.teacherService
            .query()
            .pipe(
                filter((mayBeOk: HttpResponse<ITeacher[]>) => mayBeOk.ok),
                map((response: HttpResponse<ITeacher[]>) => response.body)
            )
            .subscribe((res: ITeacher[]) => (this.teachers = res), (res: HttpErrorResponse) => this.onError(res.message));
        this.documentService
            .query()
            .pipe(
                filter((mayBeOk: HttpResponse<IDocument[]>) => mayBeOk.ok),
                map((response: HttpResponse<IDocument[]>) => response.body)
            )
            .subscribe((res: IDocument[]) => (this.documents = res), (res: HttpErrorResponse) => this.onError(res.message));
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.teacherDocument.id !== undefined) {
            this.subscribeToSaveResponse(this.teacherDocumentService.update(this.teacherDocument));
        } else {
            this.subscribeToSaveResponse(this.teacherDocumentService.create(this.teacherDocument));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<ITeacherDocument>>) {
        result.subscribe((res: HttpResponse<ITeacherDocument>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    protected onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    protected onSaveError() {
        this.isSaving = false;
    }

    protected onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }

    trackTeacherById(index: number, item: ITeacher) {
        return item.id;
    }

    trackDocumentById(index: number, item: IDocument) {
        return item.id;
    }
}
