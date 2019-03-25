import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { ITeacherDocument } from 'app/shared/model/teacher-document.model';
import { AccountService } from 'app/core';
import { TeacherDocumentService } from './teacher-document.service';

@Component({
    selector: 'jhi-teacher-document',
    templateUrl: './teacher-document.component.html'
})
export class TeacherDocumentComponent implements OnInit, OnDestroy {
    teacherDocuments: ITeacherDocument[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        protected teacherDocumentService: TeacherDocumentService,
        protected jhiAlertService: JhiAlertService,
        protected eventManager: JhiEventManager,
        protected accountService: AccountService
    ) {}

    loadAll() {
        this.teacherDocumentService
            .query()
            .pipe(
                filter((res: HttpResponse<ITeacherDocument[]>) => res.ok),
                map((res: HttpResponse<ITeacherDocument[]>) => res.body)
            )
            .subscribe(
                (res: ITeacherDocument[]) => {
                    this.teacherDocuments = res;
                },
                (res: HttpErrorResponse) => this.onError(res.message)
            );
    }

    ngOnInit() {
        this.loadAll();
        this.accountService.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInTeacherDocuments();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: ITeacherDocument) {
        return item.id;
    }

    registerChangeInTeacherDocuments() {
        this.eventSubscriber = this.eventManager.subscribe('teacherDocumentListModification', response => this.loadAll());
    }

    protected onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
