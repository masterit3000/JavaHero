import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { IFullEvaluate } from 'app/shared/model/full-evaluate.model';
import { AccountService } from 'app/core';
import { FullEvaluateService } from './full-evaluate.service';

@Component({
    selector: 'jhi-full-evaluate',
    templateUrl: './full-evaluate.component.html'
})
export class FullEvaluateComponent implements OnInit, OnDestroy {
    fullEvaluates: IFullEvaluate[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        protected fullEvaluateService: FullEvaluateService,
        protected jhiAlertService: JhiAlertService,
        protected eventManager: JhiEventManager,
        protected accountService: AccountService
    ) {}

    loadAll() {
        this.fullEvaluateService
            .query()
            .pipe(
                filter((res: HttpResponse<IFullEvaluate[]>) => res.ok),
                map((res: HttpResponse<IFullEvaluate[]>) => res.body)
            )
            .subscribe(
                (res: IFullEvaluate[]) => {
                    this.fullEvaluates = res;
                },
                (res: HttpErrorResponse) => this.onError(res.message)
            );
    }

    ngOnInit() {
        this.loadAll();
        this.accountService.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInFullEvaluates();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: IFullEvaluate) {
        return item.id;
    }

    registerChangeInFullEvaluates() {
        this.eventSubscriber = this.eventManager.subscribe('fullEvaluateListModification', response => this.loadAll());
    }

    protected onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
