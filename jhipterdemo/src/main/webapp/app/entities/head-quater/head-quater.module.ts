import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { DemoJavaHerooooSharedModule } from 'app/shared';
import {
    HeadQuaterComponent,
    HeadQuaterDetailComponent,
    HeadQuaterUpdateComponent,
    HeadQuaterDeletePopupComponent,
    HeadQuaterDeleteDialogComponent,
    headQuaterRoute,
    headQuaterPopupRoute
} from './';

const ENTITY_STATES = [...headQuaterRoute, ...headQuaterPopupRoute];

@NgModule({
    imports: [DemoJavaHerooooSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        HeadQuaterComponent,
        HeadQuaterDetailComponent,
        HeadQuaterUpdateComponent,
        HeadQuaterDeleteDialogComponent,
        HeadQuaterDeletePopupComponent
    ],
    entryComponents: [HeadQuaterComponent, HeadQuaterUpdateComponent, HeadQuaterDeleteDialogComponent, HeadQuaterDeletePopupComponent],
    providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DemoJavaHerooooHeadQuaterModule {
    constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
        this.languageHelper.language.subscribe((languageKey: string) => {
            if (languageKey !== undefined) {
                this.languageService.changeLanguage(languageKey);
            }
        });
    }
}
