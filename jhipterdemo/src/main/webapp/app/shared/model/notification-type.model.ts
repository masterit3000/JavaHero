export interface INotificationType {
    id?: number;
    content?: string;
}

export class NotificationType implements INotificationType {
    constructor(public id?: number, public content?: string) {}
}
