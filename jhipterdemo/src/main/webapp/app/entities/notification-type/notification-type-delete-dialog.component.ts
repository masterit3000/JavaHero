import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { INotificationType } from 'app/shared/model/notification-type.model';
import { NotificationTypeService } from './notification-type.service';

@Component({
    selector: 'jhi-notification-type-delete-dialog',
    templateUrl: './notification-type-delete-dialog.component.html'
})
export class NotificationTypeDeleteDialogComponent {
    notificationType: INotificationType;

    constructor(
        protected notificationTypeService: NotificationTypeService,
        public activeModal: NgbActiveModal,
        protected eventManager: JhiEventManager
    ) {}

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.notificationTypeService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'notificationTypeListModification',
                content: 'Deleted an notificationType'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-notification-type-delete-popup',
    template: ''
})
export class NotificationTypeDeletePopupComponent implements OnInit, OnDestroy {
    protected ngbModalRef: NgbModalRef;

    constructor(protected activatedRoute: ActivatedRoute, protected router: Router, protected modalService: NgbModal) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ notificationType }) => {
            setTimeout(() => {
                this.ngbModalRef = this.modalService.open(NotificationTypeDeleteDialogComponent as Component, {
                    size: 'lg',
                    backdrop: 'static'
                });
                this.ngbModalRef.componentInstance.notificationType = notificationType;
                this.ngbModalRef.result.then(
                    result => {
                        this.router.navigate(['/notification-type', { outlets: { popup: null } }]);
                        this.ngbModalRef = null;
                    },
                    reason => {
                        this.router.navigate(['/notification-type', { outlets: { popup: null } }]);
                        this.ngbModalRef = null;
                    }
                );
            }, 0);
        });
    }

    ngOnDestroy() {
        this.ngbModalRef = null;
    }
}
