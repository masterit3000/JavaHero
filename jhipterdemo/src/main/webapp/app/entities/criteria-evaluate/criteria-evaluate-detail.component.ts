import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ICriteriaEvaluate } from 'app/shared/model/criteria-evaluate.model';

@Component({
    selector: 'jhi-criteria-evaluate-detail',
    templateUrl: './criteria-evaluate-detail.component.html'
})
export class CriteriaEvaluateDetailComponent implements OnInit {
    criteriaEvaluate: ICriteriaEvaluate;

    constructor(protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ criteriaEvaluate }) => {
            this.criteriaEvaluate = criteriaEvaluate;
        });
    }

    previousState() {
        window.history.back();
    }
}
