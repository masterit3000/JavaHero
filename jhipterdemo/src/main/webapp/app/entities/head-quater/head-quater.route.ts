import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { HeadQuater } from 'app/shared/model/head-quater.model';
import { HeadQuaterService } from './head-quater.service';
import { HeadQuaterComponent } from './head-quater.component';
import { HeadQuaterDetailComponent } from './head-quater-detail.component';
import { HeadQuaterUpdateComponent } from './head-quater-update.component';
import { HeadQuaterDeletePopupComponent } from './head-quater-delete-dialog.component';
import { IHeadQuater } from 'app/shared/model/head-quater.model';

@Injectable({ providedIn: 'root' })
export class HeadQuaterResolve implements Resolve<IHeadQuater> {
    constructor(private service: HeadQuaterService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IHeadQuater> {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(
                filter((response: HttpResponse<HeadQuater>) => response.ok),
                map((headQuater: HttpResponse<HeadQuater>) => headQuater.body)
            );
        }
        return of(new HeadQuater());
    }
}

export const headQuaterRoute: Routes = [
    {
        path: '',
        component: HeadQuaterComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'demoJavaHerooooApp.headQuater.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: ':id/view',
        component: HeadQuaterDetailComponent,
        resolve: {
            headQuater: HeadQuaterResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'demoJavaHerooooApp.headQuater.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'new',
        component: HeadQuaterUpdateComponent,
        resolve: {
            headQuater: HeadQuaterResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'demoJavaHerooooApp.headQuater.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: ':id/edit',
        component: HeadQuaterUpdateComponent,
        resolve: {
            headQuater: HeadQuaterResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'demoJavaHerooooApp.headQuater.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const headQuaterPopupRoute: Routes = [
    {
        path: ':id/delete',
        component: HeadQuaterDeletePopupComponent,
        resolve: {
            headQuater: HeadQuaterResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'demoJavaHerooooApp.headQuater.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
