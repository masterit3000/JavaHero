import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ICriteriaType } from 'app/shared/model/criteria-type.model';

@Component({
    selector: 'jhi-criteria-type-detail',
    templateUrl: './criteria-type-detail.component.html'
})
export class CriteriaTypeDetailComponent implements OnInit {
    criteriaType: ICriteriaType;

    constructor(protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ criteriaType }) => {
            this.criteriaType = criteriaType;
        });
    }

    previousState() {
        window.history.back();
    }
}
