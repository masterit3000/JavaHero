import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { CriteriaType } from 'app/shared/model/criteria-type.model';
import { CriteriaTypeService } from './criteria-type.service';
import { CriteriaTypeComponent } from './criteria-type.component';
import { CriteriaTypeDetailComponent } from './criteria-type-detail.component';
import { CriteriaTypeUpdateComponent } from './criteria-type-update.component';
import { CriteriaTypeDeletePopupComponent } from './criteria-type-delete-dialog.component';
import { ICriteriaType } from 'app/shared/model/criteria-type.model';

@Injectable({ providedIn: 'root' })
export class CriteriaTypeResolve implements Resolve<ICriteriaType> {
    constructor(private service: CriteriaTypeService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICriteriaType> {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(
                filter((response: HttpResponse<CriteriaType>) => response.ok),
                map((criteriaType: HttpResponse<CriteriaType>) => criteriaType.body)
            );
        }
        return of(new CriteriaType());
    }
}

export const criteriaTypeRoute: Routes = [
    {
        path: '',
        component: CriteriaTypeComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'demoJavaHerooooApp.criteriaType.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: ':id/view',
        component: CriteriaTypeDetailComponent,
        resolve: {
            criteriaType: CriteriaTypeResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'demoJavaHerooooApp.criteriaType.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'new',
        component: CriteriaTypeUpdateComponent,
        resolve: {
            criteriaType: CriteriaTypeResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'demoJavaHerooooApp.criteriaType.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: ':id/edit',
        component: CriteriaTypeUpdateComponent,
        resolve: {
            criteriaType: CriteriaTypeResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'demoJavaHerooooApp.criteriaType.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const criteriaTypePopupRoute: Routes = [
    {
        path: ':id/delete',
        component: CriteriaTypeDeletePopupComponent,
        resolve: {
            criteriaType: CriteriaTypeResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'demoJavaHerooooApp.criteriaType.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
