import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IHeadQuater } from 'app/shared/model/head-quater.model';

@Component({
    selector: 'jhi-head-quater-detail',
    templateUrl: './head-quater-detail.component.html'
})
export class HeadQuaterDetailComponent implements OnInit {
    headQuater: IHeadQuater;

    constructor(protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ headQuater }) => {
            this.headQuater = headQuater;
        });
    }

    previousState() {
        window.history.back();
    }
}
