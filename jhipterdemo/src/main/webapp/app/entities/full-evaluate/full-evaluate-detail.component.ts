import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IFullEvaluate } from 'app/shared/model/full-evaluate.model';

@Component({
    selector: 'jhi-full-evaluate-detail',
    templateUrl: './full-evaluate-detail.component.html'
})
export class FullEvaluateDetailComponent implements OnInit {
    fullEvaluate: IFullEvaluate;

    constructor(protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ fullEvaluate }) => {
            this.fullEvaluate = fullEvaluate;
        });
    }

    previousState() {
        window.history.back();
    }
}
