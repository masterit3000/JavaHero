import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { ICriteriaEvaluate } from 'app/shared/model/criteria-evaluate.model';
import { AccountService } from 'app/core';
import { CriteriaEvaluateService } from './criteria-evaluate.service';

@Component({
    selector: 'jhi-criteria-evaluate',
    templateUrl: './criteria-evaluate.component.html'
})
export class CriteriaEvaluateComponent implements OnInit, OnDestroy {
    criteriaEvaluates: ICriteriaEvaluate[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        protected criteriaEvaluateService: CriteriaEvaluateService,
        protected jhiAlertService: JhiAlertService,
        protected eventManager: JhiEventManager,
        protected accountService: AccountService
    ) {}

    loadAll() {
        this.criteriaEvaluateService
            .query()
            .pipe(
                filter((res: HttpResponse<ICriteriaEvaluate[]>) => res.ok),
                map((res: HttpResponse<ICriteriaEvaluate[]>) => res.body)
            )
            .subscribe(
                (res: ICriteriaEvaluate[]) => {
                    this.criteriaEvaluates = res;
                },
                (res: HttpErrorResponse) => this.onError(res.message)
            );
    }

    ngOnInit() {
        this.loadAll();
        this.accountService.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInCriteriaEvaluates();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: ICriteriaEvaluate) {
        return item.id;
    }

    registerChangeInCriteriaEvaluates() {
        this.eventSubscriber = this.eventManager.subscribe('criteriaEvaluateListModification', response => this.loadAll());
    }

    protected onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
