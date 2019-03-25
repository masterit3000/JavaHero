import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { ICriteriaEvaluate } from 'app/shared/model/criteria-evaluate.model';
import { CriteriaEvaluateService } from './criteria-evaluate.service';

@Component({
    selector: 'jhi-criteria-evaluate-delete-dialog',
    templateUrl: './criteria-evaluate-delete-dialog.component.html'
})
export class CriteriaEvaluateDeleteDialogComponent {
    criteriaEvaluate: ICriteriaEvaluate;

    constructor(
        protected criteriaEvaluateService: CriteriaEvaluateService,
        public activeModal: NgbActiveModal,
        protected eventManager: JhiEventManager
    ) {}

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.criteriaEvaluateService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'criteriaEvaluateListModification',
                content: 'Deleted an criteriaEvaluate'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-criteria-evaluate-delete-popup',
    template: ''
})
export class CriteriaEvaluateDeletePopupComponent implements OnInit, OnDestroy {
    protected ngbModalRef: NgbModalRef;

    constructor(protected activatedRoute: ActivatedRoute, protected router: Router, protected modalService: NgbModal) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ criteriaEvaluate }) => {
            setTimeout(() => {
                this.ngbModalRef = this.modalService.open(CriteriaEvaluateDeleteDialogComponent as Component, {
                    size: 'lg',
                    backdrop: 'static'
                });
                this.ngbModalRef.componentInstance.criteriaEvaluate = criteriaEvaluate;
                this.ngbModalRef.result.then(
                    result => {
                        this.router.navigate(['/criteria-evaluate', { outlets: { popup: null } }]);
                        this.ngbModalRef = null;
                    },
                    reason => {
                        this.router.navigate(['/criteria-evaluate', { outlets: { popup: null } }]);
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
