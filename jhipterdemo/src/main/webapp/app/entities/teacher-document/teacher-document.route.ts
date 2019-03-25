import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { TeacherDocument } from 'app/shared/model/teacher-document.model';
import { TeacherDocumentService } from './teacher-document.service';
import { TeacherDocumentComponent } from './teacher-document.component';
import { TeacherDocumentDetailComponent } from './teacher-document-detail.component';
import { TeacherDocumentUpdateComponent } from './teacher-document-update.component';
import { TeacherDocumentDeletePopupComponent } from './teacher-document-delete-dialog.component';
import { ITeacherDocument } from 'app/shared/model/teacher-document.model';

@Injectable({ providedIn: 'root' })
export class TeacherDocumentResolve implements Resolve<ITeacherDocument> {
    constructor(private service: TeacherDocumentService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ITeacherDocument> {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(
                filter((response: HttpResponse<TeacherDocument>) => response.ok),
                map((teacherDocument: HttpResponse<TeacherDocument>) => teacherDocument.body)
            );
        }
        return of(new TeacherDocument());
    }
}

export const teacherDocumentRoute: Routes = [
    {
        path: '',
        component: TeacherDocumentComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'demoJavaHerooooApp.teacherDocument.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: ':id/view',
        component: TeacherDocumentDetailComponent,
        resolve: {
            teacherDocument: TeacherDocumentResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'demoJavaHerooooApp.teacherDocument.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'new',
        component: TeacherDocumentUpdateComponent,
        resolve: {
            teacherDocument: TeacherDocumentResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'demoJavaHerooooApp.teacherDocument.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: ':id/edit',
        component: TeacherDocumentUpdateComponent,
        resolve: {
            teacherDocument: TeacherDocumentResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'demoJavaHerooooApp.teacherDocument.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const teacherDocumentPopupRoute: Routes = [
    {
        path: ':id/delete',
        component: TeacherDocumentDeletePopupComponent,
        resolve: {
            teacherDocument: TeacherDocumentResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'demoJavaHerooooApp.teacherDocument.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
