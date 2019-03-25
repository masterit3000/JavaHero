import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { INotificationType } from 'app/shared/model/notification-type.model';

@Component({
    selector: 'jhi-notification-type-detail',
    templateUrl: './notification-type-detail.component.html'
})
export class NotificationTypeDetailComponent implements OnInit {
    notificationType: INotificationType;

    constructor(protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ notificationType }) => {
            this.notificationType = notificationType;
        });
    }

    previousState() {
        window.history.back();
    }
}
