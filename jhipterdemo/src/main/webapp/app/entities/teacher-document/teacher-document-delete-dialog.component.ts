import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { ITeacherDocument } from 'app/shared/model/teacher-document.model';
import { TeacherDocumentService } from './teacher-document.service';

@Component({
    selector: 'jhi-teacher-document-delete-dialog',
    templateUrl: './teacher-document-delete-dialog.component.html'
})
export class TeacherDocumentDeleteDialogComponent {
    teacherDocument: ITeacherDocument;

    constructor(
        protected teacherDocumentService: TeacherDocumentService,
        public activeModal: NgbActiveModal,
        protected eventManager: JhiEventManager
    ) {}

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.teacherDocumentService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'teacherDocumentListModification',
                content: 'Deleted an teacherDocument'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-teacher-document-delete-popup',
    template: ''
})
export class TeacherDocumentDeletePopupComponent implements OnInit, OnDestroy {
    protected ngbModalRef: NgbModalRef;

    constructor(protected activatedRoute: ActivatedRoute, protected router: Router, protected modalService: NgbModal) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ teacherDocument }) => {
            setTimeout(() => {
                this.ngbModalRef = this.modalService.open(TeacherDocumentDeleteDialogComponent as Component, {
                    size: 'lg',
                    backdrop: 'static'
                });
                this.ngbModalRef.componentInstance.teacherDocument = teacherDocument;
                this.ngbModalRef.result.then(
                    result => {
                        this.router.navigate(['/teacher-document', { outlets: { popup: null } }]);
                        this.ngbModalRef = null;
                    },
                    reason => {
                        this.router.navigate(['/teacher-document', { outlets: { popup: null } }]);
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
