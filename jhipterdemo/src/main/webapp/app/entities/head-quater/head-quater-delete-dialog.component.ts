import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IHeadQuater } from 'app/shared/model/head-quater.model';
import { HeadQuaterService } from './head-quater.service';

@Component({
    selector: 'jhi-head-quater-delete-dialog',
    templateUrl: './head-quater-delete-dialog.component.html'
})
export class HeadQuaterDeleteDialogComponent {
    headQuater: IHeadQuater;

    constructor(
        protected headQuaterService: HeadQuaterService,
        public activeModal: NgbActiveModal,
        protected eventManager: JhiEventManager
    ) {}

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.headQuaterService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'headQuaterListModification',
                content: 'Deleted an headQuater'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-head-quater-delete-popup',
    template: ''
})
export class HeadQuaterDeletePopupComponent implements OnInit, OnDestroy {
    protected ngbModalRef: NgbModalRef;

    constructor(protected activatedRoute: ActivatedRoute, protected router: Router, protected modalService: NgbModal) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ headQuater }) => {
            setTimeout(() => {
                this.ngbModalRef = this.modalService.open(HeadQuaterDeleteDialogComponent as Component, { size: 'lg', backdrop: 'static' });
                this.ngbModalRef.componentInstance.headQuater = headQuater;
                this.ngbModalRef.result.then(
                    result => {
                        this.router.navigate(['/head-quater', { outlets: { popup: null } }]);
                        this.ngbModalRef = null;
                    },
                    reason => {
                        this.router.navigate(['/head-quater', { outlets: { popup: null } }]);
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
