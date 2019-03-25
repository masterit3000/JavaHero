import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { DemoJavaHerooooSharedModule } from 'app/shared';
import {
    FullEvaluateComponent,
    FullEvaluateDetailComponent,
    FullEvaluateUpdateComponent,
    FullEvaluateDeletePopupComponent,
    FullEvaluateDeleteDialogComponent,
    fullEvaluateRoute,
    fullEvaluatePopupRoute
} from './';

const ENTITY_STATES = [...fullEvaluateRoute, ...fullEvaluatePopupRoute];

@NgModule({
    imports: [DemoJavaHerooooSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        FullEvaluateComponent,
        FullEvaluateDetailComponent,
        FullEvaluateUpdateComponent,
        FullEvaluateDeleteDialogComponent,
        FullEvaluateDeletePopupComponent
    ],
    entryComponents: [
        FullEvaluateComponent,
        FullEvaluateUpdateComponent,
        FullEvaluateDeleteDialogComponent,
        FullEvaluateDeletePopupComponent
    ],
    providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DemoJavaHerooooFullEvaluateModule {
    constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
        this.languageHelper.language.subscribe((languageKey: string) => {
            if (languageKey !== undefined) {
                this.languageService.changeLanguage(languageKey);
            }
        });
    }
}
