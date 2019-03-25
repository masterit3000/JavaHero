import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { CriteriaEvaluate } from 'app/shared/model/criteria-evaluate.model';
import { CriteriaEvaluateService } from './criteria-evaluate.service';
import { CriteriaEvaluateComponent } from './criteria-evaluate.component';
import { CriteriaEvaluateDetailComponent } from './criteria-evaluate-detail.component';
import { CriteriaEvaluateUpdateComponent } from './criteria-evaluate-update.component';
import { CriteriaEvaluateDeletePopupComponent } from './criteria-evaluate-delete-dialog.component';
import { ICriteriaEvaluate } from 'app/shared/model/criteria-evaluate.model';

@Injectable({ providedIn: 'root' })
export class CriteriaEvaluateResolve implements Resolve<ICriteriaEvaluate> {
    constructor(private service: CriteriaEvaluateService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICriteriaEvaluate> {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(
                filter((response: HttpResponse<CriteriaEvaluate>) => response.ok),
                map((criteriaEvaluate: HttpResponse<CriteriaEvaluate>) => criteriaEvaluate.body)
            );
        }
        return of(new CriteriaEvaluate());
    }
}

export const criteriaEvaluateRoute: Routes = [
    {
        path: '',
        component: CriteriaEvaluateComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'demoJavaHerooooApp.criteriaEvaluate.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: ':id/view',
        component: CriteriaEvaluateDetailComponent,
        resolve: {
            criteriaEvaluate: CriteriaEvaluateResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'demoJavaHerooooApp.criteriaEvaluate.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'new',
        component: CriteriaEvaluateUpdateComponent,
        resolve: {
            criteriaEvaluate: CriteriaEvaluateResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'demoJavaHerooooApp.criteriaEvaluate.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: ':id/edit',
        component: CriteriaEvaluateUpdateComponent,
        resolve: {
            criteriaEvaluate: CriteriaEvaluateResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'demoJavaHerooooApp.criteriaEvaluate.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const criteriaEvaluatePopupRoute: Routes = [
    {
        path: ':id/delete',
        component: CriteriaEvaluateDeletePopupComponent,
        resolve: {
            criteriaEvaluate: CriteriaEvaluateResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'demoJavaHerooooApp.criteriaEvaluate.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
