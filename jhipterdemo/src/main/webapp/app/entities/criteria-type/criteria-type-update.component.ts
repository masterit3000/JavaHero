import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ICriteriaType } from 'app/shared/model/criteria-type.model';
import { CriteriaTypeService } from './criteria-type.service';

@Component({
    selector: 'jhi-criteria-type-update',
    templateUrl: './criteria-type-update.component.html'
})
export class CriteriaTypeUpdateComponent implements OnInit {
    criteriaType: ICriteriaType;
    isSaving: boolean;

    constructor(protected criteriaTypeService: CriteriaTypeService, protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ criteriaType }) => {
            this.criteriaType = criteriaType;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.criteriaType.id !== undefined) {
            this.subscribeToSaveResponse(this.criteriaTypeService.update(this.criteriaType));
        } else {
            this.subscribeToSaveResponse(this.criteriaTypeService.create(this.criteriaType));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<ICriteriaType>>) {
        result.subscribe((res: HttpResponse<ICriteriaType>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    protected onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    protected onSaveError() {
        this.isSaving = false;
    }
}
