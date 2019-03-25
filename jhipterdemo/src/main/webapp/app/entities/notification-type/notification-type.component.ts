import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { INotificationType } from 'app/shared/model/notification-type.model';
import { AccountService } from 'app/core';
import { NotificationTypeService } from './notification-type.service';

@Component({
    selector: 'jhi-notification-type',
    templateUrl: './notification-type.component.html'
})
export class NotificationTypeComponent implements OnInit, OnDestroy {
    notificationTypes: INotificationType[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        protected notificationTypeService: NotificationTypeService,
        protected jhiAlertService: JhiAlertService,
        protected eventManager: JhiEventManager,
        protected accountService: AccountService
    ) {}

    loadAll() {
        this.notificationTypeService
            .query()
            .pipe(
                filter((res: HttpResponse<INotificationType[]>) => res.ok),
                map((res: HttpResponse<INotificationType[]>) => res.body)
            )
            .subscribe(
                (res: INotificationType[]) => {
                    this.notificationTypes = res;
                },
                (res: HttpErrorResponse) => this.onError(res.message)
            );
    }

    ngOnInit() {
        this.loadAll();
        this.accountService.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInNotificationTypes();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: INotificationType) {
        return item.id;
    }

    registerChangeInNotificationTypes() {
        this.eventSubscriber = this.eventManager.subscribe('notificationTypeListModification', response => this.loadAll());
    }

    protected onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
