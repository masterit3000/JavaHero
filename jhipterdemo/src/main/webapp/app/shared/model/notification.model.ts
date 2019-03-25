import { IHeadQuater } from 'app/shared/model/head-quater.model';
import { INotificationType } from 'app/shared/model/notification-type.model';

export const enum Status {
    EXIST = 'EXIST',
    DELETED = 'DELETED'
}

export interface INotification {
    id?: number;
    name?: string;
    description?: string;
    uRL?: string;
    status?: Status;
    headQuater?: IHeadQuater;
    notificationType?: INotificationType;
}

export class Notification implements INotification {
    constructor(
        public id?: number,
        public name?: string,
        public description?: string,
        public uRL?: string,
        public status?: Status,
        public headQuater?: IHeadQuater,
        public notificationType?: INotificationType
    ) {}
}
