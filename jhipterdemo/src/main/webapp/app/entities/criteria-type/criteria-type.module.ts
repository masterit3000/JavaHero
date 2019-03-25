import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { DemoJavaHerooooSharedModule } from 'app/shared';
import {
    CriteriaTypeComponent,
    CriteriaTypeDetailComponent,
    CriteriaTypeUpdateComponent,
    CriteriaTypeDeletePopupComponent,
    CriteriaTypeDeleteDialogComponent,
    criteriaTypeRoute,
    criteriaTypePopupRoute
} from './';

const ENTITY_STATES = [...criteriaTypeRoute, ...criteriaTypePopupRoute];

@NgModule({
    imports: [DemoJavaHerooooSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        CriteriaTypeComponent,
        CriteriaTypeDetailComponent,
        CriteriaTypeUpdateComponent,
        CriteriaTypeDeleteDialogComponent,
        CriteriaTypeDeletePopupComponent
    ],
    entryComponents: [
        CriteriaTypeComponent,
        CriteriaTypeUpdateComponent,
        CriteriaTypeDeleteDialogComponent,
        CriteriaTypeDeletePopupComponent
    ],
    providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DemoJavaHerooooCriteriaTypeModule {
    constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
        this.languageHelper.language.subscribe((languageKey: string) => {
            if (languageKey !== undefined) {
                this.languageService.changeLanguage(languageKey);
            }
        });
    }
}
