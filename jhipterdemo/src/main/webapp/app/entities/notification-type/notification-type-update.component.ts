import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { INotificationType } from 'app/shared/model/notification-type.model';
import { NotificationTypeService } from './notification-type.service';

@Component({
    selector: 'jhi-notification-type-update',
    templateUrl: './notification-type-update.component.html'
})
export class NotificationTypeUpdateComponent implements OnInit {
    notificationType: INotificationType;
    isSaving: boolean;

    constructor(protected notificationTypeService: NotificationTypeService, protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ notificationType }) => {
            this.notificationType = notificationType;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.notificationType.id !== undefined) {
            this.subscribeToSaveResponse(this.notificationTypeService.update(this.notificationType));
        } else {
            this.subscribeToSaveResponse(this.notificationTypeService.create(this.notificationType));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<INotificationType>>) {
        result.subscribe((res: HttpResponse<INotificationType>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    protected onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    protected onSaveError() {
        this.isSaving = false;
    }
}
