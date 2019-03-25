import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { DemoJavaHerooooSharedModule } from 'app/shared';
import {
    CriteriaEvaluateComponent,
    CriteriaEvaluateDetailComponent,
    CriteriaEvaluateUpdateComponent,
    CriteriaEvaluateDeletePopupComponent,
    CriteriaEvaluateDeleteDialogComponent,
    criteriaEvaluateRoute,
    criteriaEvaluatePopupRoute
} from './';

const ENTITY_STATES = [...criteriaEvaluateRoute, ...criteriaEvaluatePopupRoute];

@NgModule({
    imports: [DemoJavaHerooooSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        CriteriaEvaluateComponent,
        CriteriaEvaluateDetailComponent,
        CriteriaEvaluateUpdateComponent,
        CriteriaEvaluateDeleteDialogComponent,
        CriteriaEvaluateDeletePopupComponent
    ],
    entryComponents: [
        CriteriaEvaluateComponent,
        CriteriaEvaluateUpdateComponent,
        CriteriaEvaluateDeleteDialogComponent,
        CriteriaEvaluateDeletePopupComponent
    ],
    providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DemoJavaHerooooCriteriaEvaluateModule {
    constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
        this.languageHelper.language.subscribe((languageKey: string) => {
            if (languageKey !== undefined) {
                this.languageService.changeLanguage(languageKey);
            }
        });
    }
}
