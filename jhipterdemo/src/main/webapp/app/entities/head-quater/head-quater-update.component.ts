import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { IHeadQuater } from 'app/shared/model/head-quater.model';
import { HeadQuaterService } from './head-quater.service';

@Component({
    selector: 'jhi-head-quater-update',
    templateUrl: './head-quater-update.component.html'
})
export class HeadQuaterUpdateComponent implements OnInit {
    headQuater: IHeadQuater;
    isSaving: boolean;

    constructor(protected headQuaterService: HeadQuaterService, protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ headQuater }) => {
            this.headQuater = headQuater;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.headQuater.id !== undefined) {
            this.subscribeToSaveResponse(this.headQuaterService.update(this.headQuater));
        } else {
            this.subscribeToSaveResponse(this.headQuaterService.create(this.headQuater));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IHeadQuater>>) {
        result.subscribe((res: HttpResponse<IHeadQuater>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    protected onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    protected onSaveError() {
        this.isSaving = false;
    }
}
