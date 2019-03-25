import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { NotificationType } from 'app/shared/model/notification-type.model';
import { NotificationTypeService } from './notification-type.service';
import { NotificationTypeComponent } from './notification-type.component';
import { NotificationTypeDetailComponent } from './notification-type-detail.component';
import { NotificationTypeUpdateComponent } from './notification-type-update.component';
import { NotificationTypeDeletePopupComponent } from './notification-type-delete-dialog.component';
import { INotificationType } from 'app/shared/model/notification-type.model';

@Injectable({ providedIn: 'root' })
export class NotificationTypeResolve implements Resolve<INotificationType> {
    constructor(private service: NotificationTypeService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<INotificationType> {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(
                filter((response: HttpResponse<NotificationType>) => response.ok),
                map((notificationType: HttpResponse<NotificationType>) => notificationType.body)
            );
        }
        return of(new NotificationType());
    }
}

export const notificationTypeRoute: Routes = [
    {
        path: '',
        component: NotificationTypeComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'demoJavaHerooooApp.notificationType.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: ':id/view',
        component: NotificationTypeDetailComponent,
        resolve: {
            notificationType: NotificationTypeResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'demoJavaHerooooApp.notificationType.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'new',
        component: NotificationTypeUpdateComponent,
        resolve: {
            notificationType: NotificationTypeResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'demoJavaHerooooApp.notificationType.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: ':id/edit',
        component: NotificationTypeUpdateComponent,
        resolve: {
            notificationType: NotificationTypeResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'demoJavaHerooooApp.notificationType.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const notificationTypePopupRoute: Routes = [
    {
        path: ':id/delete',
        component: NotificationTypeDeletePopupComponent,
        resolve: {
            notificationType: NotificationTypeResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'demoJavaHerooooApp.notificationType.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
