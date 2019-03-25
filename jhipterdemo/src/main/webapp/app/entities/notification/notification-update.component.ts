import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiAlertService } from 'ng-jhipster';
import { INotification } from 'app/shared/model/notification.model';
import { NotificationService } from './notification.service';
import { IHeadQuater } from 'app/shared/model/head-quater.model';
import { HeadQuaterService } from 'app/entities/head-quater';
import { INotificationType } from 'app/shared/model/notification-type.model';
import { NotificationTypeService } from 'app/entities/notification-type';

@Component({
    selector: 'jhi-notification-update',
    templateUrl: './notification-update.component.html'
})
export class NotificationUpdateComponent implements OnInit {
    notification: INotification;
    isSaving: boolean;

    headquaters: IHeadQuater[];

    notificationtypes: INotificationType[];

    constructor(
        protected jhiAlertService: JhiAlertService,
        protected notificationService: NotificationService,
        protected headQuaterService: HeadQuaterService,
        protected notificationTypeService: NotificationTypeService,
        protected activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ notification }) => {
            this.notification = notification;
        });
        this.headQuaterService
            .query()
            .pipe(
                filter((mayBeOk: HttpResponse<IHeadQuater[]>) => mayBeOk.ok),
                map((response: HttpResponse<IHeadQuater[]>) => response.body)
            )
            .subscribe((res: IHeadQuater[]) => (this.headquaters = res), (res: HttpErrorResponse) => this.onError(res.message));
        this.notificationTypeService
            .query()
            .pipe(
                filter((mayBeOk: HttpResponse<INotificationType[]>) => mayBeOk.ok),
                map((response: HttpResponse<INotificationType[]>) => response.body)
            )
            .subscribe((res: INotificationType[]) => (this.notificationtypes = res), (res: HttpErrorResponse) => this.onError(res.message));
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.notification.id !== undefined) {
            this.subscribeToSaveResponse(this.notificationService.update(this.notification));
        } else {
            this.subscribeToSaveResponse(this.notificationService.create(this.notification));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<INotification>>) {
        result.subscribe((res: HttpResponse<INotification>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
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

    trackHeadQuaterById(index: number, item: IHeadQuater) {
        return item.id;
    }

    trackNotificationTypeById(index: number, item: INotificationType) {
        return item.id;
    }
}
