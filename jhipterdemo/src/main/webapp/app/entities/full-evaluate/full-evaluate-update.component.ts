import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiAlertService } from 'ng-jhipster';
import { IFullEvaluate } from 'app/shared/model/full-evaluate.model';
import { FullEvaluateService } from './full-evaluate.service';
import { ITeacher } from 'app/shared/model/teacher.model';
import { TeacherService } from 'app/entities/teacher';

@Component({
    selector: 'jhi-full-evaluate-update',
    templateUrl: './full-evaluate-update.component.html'
})
export class FullEvaluateUpdateComponent implements OnInit {
    fullEvaluate: IFullEvaluate;
    isSaving: boolean;

    teachers: ITeacher[];

    constructor(
        protected jhiAlertService: JhiAlertService,
        protected fullEvaluateService: FullEvaluateService,
        protected teacherService: TeacherService,
        protected activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ fullEvaluate }) => {
            this.fullEvaluate = fullEvaluate;
        });
        this.teacherService
            .query()
            .pipe(
                filter((mayBeOk: HttpResponse<ITeacher[]>) => mayBeOk.ok),
                map((response: HttpResponse<ITeacher[]>) => response.body)
            )
            .subscribe((res: ITeacher[]) => (this.teachers = res), (res: HttpErrorResponse) => this.onError(res.message));
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.fullEvaluate.id !== undefined) {
            this.subscribeToSaveResponse(this.fullEvaluateService.update(this.fullEvaluate));
        } else {
            this.subscribeToSaveResponse(this.fullEvaluateService.create(this.fullEvaluate));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IFullEvaluate>>) {
        result.subscribe((res: HttpResponse<IFullEvaluate>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
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
}
