import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'teacher',
                loadChildren: './teacher/teacher.module#DemoJavaHerooooTeacherModule'
            },
            {
                path: 'teacher-document',
                loadChildren: './teacher-document/teacher-document.module#DemoJavaHerooooTeacherDocumentModule'
            },
            {
                path: 'document',
                loadChildren: './document/document.module#DemoJavaHerooooDocumentModule'
            },
            {
                path: 'document-type',
                loadChildren: './document-type/document-type.module#DemoJavaHerooooDocumentTypeModule'
            },
            {
                path: 'notification',
                loadChildren: './notification/notification.module#DemoJavaHerooooNotificationModule'
            },
            {
                path: 'notification-type',
                loadChildren: './notification-type/notification-type.module#DemoJavaHerooooNotificationTypeModule'
            },
            {
                path: 'head-quater',
                loadChildren: './head-quater/head-quater.module#DemoJavaHerooooHeadQuaterModule'
            },
            {
                path: 'criteria-type',
                loadChildren: './criteria-type/criteria-type.module#DemoJavaHerooooCriteriaTypeModule'
            },
            {
                path: 'answer',
                loadChildren: './answer/answer.module#DemoJavaHerooooAnswerModule'
            },
            {
                path: 'criteria-evaluate',
                loadChildren: './criteria-evaluate/criteria-evaluate.module#DemoJavaHerooooCriteriaEvaluateModule'
            },
            {
                path: 'full-evaluate',
                loadChildren: './full-evaluate/full-evaluate.module#DemoJavaHerooooFullEvaluateModule'
            }
            /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
        ])
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DemoJavaHerooooEntityModule {}
