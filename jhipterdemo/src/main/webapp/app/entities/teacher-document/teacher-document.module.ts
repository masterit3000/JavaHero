import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { DemoJavaHerooooSharedModule } from 'app/shared';
import {
    TeacherDocumentComponent,
    TeacherDocumentDetailComponent,
    TeacherDocumentUpdateComponent,
    TeacherDocumentDeletePopupComponent,
    TeacherDocumentDeleteDialogComponent,
    teacherDocumentRoute,
    teacherDocumentPopupRoute
} from './';

const ENTITY_STATES = [...teacherDocumentRoute, ...teacherDocumentPopupRoute];

@NgModule({
    imports: [DemoJavaHerooooSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        TeacherDocumentComponent,
        TeacherDocumentDetailComponent,
        TeacherDocumentUpdateComponent,
        TeacherDocumentDeleteDialogComponent,
        TeacherDocumentDeletePopupComponent
    ],
    entryComponents: [
        TeacherDocumentComponent,
        TeacherDocumentUpdateComponent,
        TeacherDocumentDeleteDialogComponent,
        TeacherDocumentDeletePopupComponent
    ],
    providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DemoJavaHerooooTeacherDocumentModule {
    constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
        this.languageHelper.language.subscribe((languageKey: string) => {
            if (languageKey !== undefined) {
                this.languageService.changeLanguage(languageKey);
            }
        });
    }
}
