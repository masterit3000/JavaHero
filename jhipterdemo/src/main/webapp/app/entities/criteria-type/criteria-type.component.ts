import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { ICriteriaType } from 'app/shared/model/criteria-type.model';
import { AccountService } from 'app/core';
import { CriteriaTypeService } from './criteria-type.service';

@Component({
    selector: 'jhi-criteria-type',
    templateUrl: './criteria-type.component.html'
})
export class CriteriaTypeComponent implements OnInit, OnDestroy {
    criteriaTypes: ICriteriaType[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        protected criteriaTypeService: CriteriaTypeService,
        protected jhiAlertService: JhiAlertService,
        protected eventManager: JhiEventManager,
        protected accountService: AccountService
    ) {}

    loadAll() {
        this.criteriaTypeService
            .query()
            .pipe(
                filter((res: HttpResponse<ICriteriaType[]>) => res.ok),
                map((res: HttpResponse<ICriteriaType[]>) => res.body)
            )
            .subscribe(
                (res: ICriteriaType[]) => {
                    this.criteriaTypes = res;
                },
                (res: HttpErrorResponse) => this.onError(res.message)
            );
    }

    ngOnInit() {
        this.loadAll();
        this.accountService.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInCriteriaTypes();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: ICriteriaType) {
        return item.id;
    }

    registerChangeInCriteriaTypes() {
        this.eventSubscriber = this.eventManager.subscribe('criteriaTypeListModification', response => this.loadAll());
    }

    protected onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
