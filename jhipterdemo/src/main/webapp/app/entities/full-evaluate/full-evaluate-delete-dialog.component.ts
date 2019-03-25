import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IFullEvaluate } from 'app/shared/model/full-evaluate.model';
import { FullEvaluateService } from './full-evaluate.service';

@Component({
    selector: 'jhi-full-evaluate-delete-dialog',
    templateUrl: './full-evaluate-delete-dialog.component.html'
})
export class FullEvaluateDeleteDialogComponent {
    fullEvaluate: IFullEvaluate;

    constructor(
        protected fullEvaluateService: FullEvaluateService,
        public activeModal: NgbActiveModal,
        protected eventManager: JhiEventManager
    ) {}

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.fullEvaluateService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'fullEvaluateListModification',
                content: 'Deleted an fullEvaluate'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-full-evaluate-delete-popup',
    template: ''
})
export class FullEvaluateDeletePopupComponent implements OnInit, OnDestroy {
    protected ngbModalRef: NgbModalRef;

    constructor(protected activatedRoute: ActivatedRoute, protected router: Router, protected modalService: NgbModal) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ fullEvaluate }) => {
            setTimeout(() => {
                this.ngbModalRef = this.modalService.open(FullEvaluateDeleteDialogComponent as Component, {
                    size: 'lg',
                    backdrop: 'static'
                });
                this.ngbModalRef.componentInstance.fullEvaluate = fullEvaluate;
                this.ngbModalRef.result.then(
                    result => {
                        this.router.navigate(['/full-evaluate', { outlets: { popup: null } }]);
                        this.ngbModalRef = null;
                    },
                    reason => {
                        this.router.navigate(['/full-evaluate', { outlets: { popup: null } }]);
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
