import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { ICriteriaType } from 'app/shared/model/criteria-type.model';
import { CriteriaTypeService } from './criteria-type.service';

@Component({
    selector: 'jhi-criteria-type-delete-dialog',
    templateUrl: './criteria-type-delete-dialog.component.html'
})
export class CriteriaTypeDeleteDialogComponent {
    criteriaType: ICriteriaType;

    constructor(
        protected criteriaTypeService: CriteriaTypeService,
        public activeModal: NgbActiveModal,
        protected eventManager: JhiEventManager
    ) {}

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.criteriaTypeService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'criteriaTypeListModification',
                content: 'Deleted an criteriaType'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-criteria-type-delete-popup',
    template: ''
})
export class CriteriaTypeDeletePopupComponent implements OnInit, OnDestroy {
    protected ngbModalRef: NgbModalRef;

    constructor(protected activatedRoute: ActivatedRoute, protected router: Router, protected modalService: NgbModal) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ criteriaType }) => {
            setTimeout(() => {
                this.ngbModalRef = this.modalService.open(CriteriaTypeDeleteDialogComponent as Component, {
                    size: 'lg',
                    backdrop: 'static'
                });
                this.ngbModalRef.componentInstance.criteriaType = criteriaType;
                this.ngbModalRef.result.then(
                    result => {
                        this.router.navigate(['/criteria-type', { outlets: { popup: null } }]);
                        this.ngbModalRef = null;
                    },
                    reason => {
                        this.router.navigate(['/criteria-type', { outlets: { popup: null } }]);
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
