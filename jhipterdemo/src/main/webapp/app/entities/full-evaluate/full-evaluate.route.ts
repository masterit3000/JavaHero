import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FullEvaluate } from 'app/shared/model/full-evaluate.model';
import { FullEvaluateService } from './full-evaluate.service';
import { FullEvaluateComponent } from './full-evaluate.component';
import { FullEvaluateDetailComponent } from './full-evaluate-detail.component';
import { FullEvaluateUpdateComponent } from './full-evaluate-update.component';
import { FullEvaluateDeletePopupComponent } from './full-evaluate-delete-dialog.component';
import { IFullEvaluate } from 'app/shared/model/full-evaluate.model';

@Injectable({ providedIn: 'root' })
export class FullEvaluateResolve implements Resolve<IFullEvaluate> {
    constructor(private service: FullEvaluateService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IFullEvaluate> {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(
                filter((response: HttpResponse<FullEvaluate>) => response.ok),
                map((fullEvaluate: HttpResponse<FullEvaluate>) => fullEvaluate.body)
            );
        }
        return of(new FullEvaluate());
    }
}

export const fullEvaluateRoute: Routes = [
    {
        path: '',
        component: FullEvaluateComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'demoJavaHerooooApp.fullEvaluate.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: ':id/view',
        component: FullEvaluateDetailComponent,
        resolve: {
            fullEvaluate: FullEvaluateResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'demoJavaHerooooApp.fullEvaluate.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'new',
        component: FullEvaluateUpdateComponent,
        resolve: {
            fullEvaluate: FullEvaluateResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'demoJavaHerooooApp.fullEvaluate.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: ':id/edit',
        component: FullEvaluateUpdateComponent,
        resolve: {
            fullEvaluate: FullEvaluateResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'demoJavaHerooooApp.fullEvaluate.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const fullEvaluatePopupRoute: Routes = [
    {
        path: ':id/delete',
        component: FullEvaluateDeletePopupComponent,
        resolve: {
            fullEvaluate: FullEvaluateResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'demoJavaHerooooApp.fullEvaluate.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
