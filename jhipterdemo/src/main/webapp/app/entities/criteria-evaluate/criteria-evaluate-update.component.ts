import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiAlertService } from 'ng-jhipster';
import { ICriteriaEvaluate } from 'app/shared/model/criteria-evaluate.model';
import { CriteriaEvaluateService } from './criteria-evaluate.service';
import { ICriteriaType } from 'app/shared/model/criteria-type.model';
import { CriteriaTypeService } from 'app/entities/criteria-type';

@Component({
    selector: 'jhi-criteria-evaluate-update',
    templateUrl: './criteria-evaluate-update.component.html'
})
export class CriteriaEvaluateUpdateComponent implements OnInit {
    criteriaEvaluate: ICriteriaEvaluate;
    isSaving: boolean;

    criteriatypes: ICriteriaType[];

    constructor(
        protected jhiAlertService: JhiAlertService,
        protected criteriaEvaluateService: CriteriaEvaluateService,
        protected criteriaTypeService: CriteriaTypeService,
        protected activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ criteriaEvaluate }) => {
            this.criteriaEvaluate = criteriaEvaluate;
        });
        this.criteriaTypeService
            .query()
            .pipe(
                filter((mayBeOk: HttpResponse<ICriteriaType[]>) => mayBeOk.ok),
                map((response: HttpResponse<ICriteriaType[]>) => response.body)
            )
            .subscribe((res: ICriteriaType[]) => (this.criteriatypes = res), (res: HttpErrorResponse) => this.onError(res.message));
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.criteriaEvaluate.id !== undefined) {
            this.subscribeToSaveResponse(this.criteriaEvaluateService.update(this.criteriaEvaluate));
        } else {
            this.subscribeToSaveResponse(this.criteriaEvaluateService.create(this.criteriaEvaluate));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<ICriteriaEvaluate>>) {
        result.subscribe((res: HttpResponse<ICriteriaEvaluate>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
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

    trackCriteriaTypeById(index: number, item: ICriteriaType) {
        return item.id;
    }
}
