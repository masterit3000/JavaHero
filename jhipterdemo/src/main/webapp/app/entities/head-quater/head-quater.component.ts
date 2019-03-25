import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { IHeadQuater } from 'app/shared/model/head-quater.model';
import { AccountService } from 'app/core';
import { HeadQuaterService } from './head-quater.service';

@Component({
    selector: 'jhi-head-quater',
    templateUrl: './head-quater.component.html'
})
export class HeadQuaterComponent implements OnInit, OnDestroy {
    headQuaters: IHeadQuater[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        protected headQuaterService: HeadQuaterService,
        protected jhiAlertService: JhiAlertService,
        protected eventManager: JhiEventManager,
        protected accountService: AccountService
    ) {}

    loadAll() {
        this.headQuaterService
            .query()
            .pipe(
                filter((res: HttpResponse<IHeadQuater[]>) => res.ok),
                map((res: HttpResponse<IHeadQuater[]>) => res.body)
            )
            .subscribe(
                (res: IHeadQuater[]) => {
                    this.headQuaters = res;
                },
                (res: HttpErrorResponse) => this.onError(res.message)
            );
    }

    ngOnInit() {
        this.loadAll();
        this.accountService.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInHeadQuaters();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: IHeadQuater) {
        return item.id;
    }

    registerChangeInHeadQuaters() {
        this.eventSubscriber = this.eventManager.subscribe('headQuaterListModification', response => this.loadAll());
    }

    protected onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
