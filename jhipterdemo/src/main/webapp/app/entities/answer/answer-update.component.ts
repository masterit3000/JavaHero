import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiAlertService } from 'ng-jhipster';
import { IAnswer } from 'app/shared/model/answer.model';
import { AnswerService } from './answer.service';
import { IFullEvaluate } from 'app/shared/model/full-evaluate.model';
import { FullEvaluateService } from 'app/entities/full-evaluate';
import { ICriteriaEvaluate } from 'app/shared/model/criteria-evaluate.model';
import { CriteriaEvaluateService } from 'app/entities/criteria-evaluate';

@Component({
    selector: 'jhi-answer-update',
    templateUrl: './answer-update.component.html'
})
export class AnswerUpdateComponent implements OnInit {
    answer: IAnswer;
    isSaving: boolean;

    fullevaluates: IFullEvaluate[];

    criteriaevaluates: ICriteriaEvaluate[];

    constructor(
        protected jhiAlertService: JhiAlertService,
        protected answerService: AnswerService,
        protected fullEvaluateService: FullEvaluateService,
        protected criteriaEvaluateService: CriteriaEvaluateService,
        protected activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ answer }) => {
            this.answer = answer;
        });
        this.fullEvaluateService
            .query()
            .pipe(
                filter((mayBeOk: HttpResponse<IFullEvaluate[]>) => mayBeOk.ok),
                map((response: HttpResponse<IFullEvaluate[]>) => response.body)
            )
            .subscribe((res: IFullEvaluate[]) => (this.fullevaluates = res), (res: HttpErrorResponse) => this.onError(res.message));
        this.criteriaEvaluateService
            .query()
            .pipe(
                filter((mayBeOk: HttpResponse<ICriteriaEvaluate[]>) => mayBeOk.ok),
                map((response: HttpResponse<ICriteriaEvaluate[]>) => response.body)
            )
            .subscribe((res: ICriteriaEvaluate[]) => (this.criteriaevaluates = res), (res: HttpErrorResponse) => this.onError(res.message));
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.answer.id !== undefined) {
            this.subscribeToSaveResponse(this.answerService.update(this.answer));
        } else {
            this.subscribeToSaveResponse(this.answerService.create(this.answer));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IAnswer>>) {
        result.subscribe((res: HttpResponse<IAnswer>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
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

    trackFullEvaluateById(index: number, item: IFullEvaluate) {
        return item.id;
    }

    trackCriteriaEvaluateById(index: number, item: ICriteriaEvaluate) {
        return item.id;
    }
}
