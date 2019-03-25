import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { DemoJavaHerooooSharedModule } from 'app/shared';
import {
    NotificationTypeComponent,
    NotificationTypeDetailComponent,
    NotificationTypeUpdateComponent,
    NotificationTypeDeletePopupComponent,
    NotificationTypeDeleteDialogComponent,
    notificationTypeRoute,
    notificationTypePopupRoute
} from './';

const ENTITY_STATES = [...notificationTypeRoute, ...notificationTypePopupRoute];

@NgModule({
    imports: [DemoJavaHerooooSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        NotificationTypeComponent,
        NotificationTypeDetailComponent,
        NotificationTypeUpdateComponent,
        NotificationTypeDeleteDialogComponent,
        NotificationTypeDeletePopupComponent
    ],
    entryComponents: [
        NotificationTypeComponent,
        NotificationTypeUpdateComponent,
        NotificationTypeDeleteDialogComponent,
        NotificationTypeDeletePopupComponent
    ],
    providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DemoJavaHerooooNotificationTypeModule {
    constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
        this.languageHelper.language.subscribe((languageKey: string) => {
            if (languageKey !== undefined) {
                this.languageService.changeLanguage(languageKey);
            }
        });
    }
}
