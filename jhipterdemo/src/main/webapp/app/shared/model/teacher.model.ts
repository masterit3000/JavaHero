import { Moment } from 'moment';
import { ITeacherDocument } from 'app/shared/model/teacher-document.model';

export const enum TeacherLevel {
    TEACHER = 'TEACHER',
    DEAN = 'DEAN',
    HIGHLEVEL = 'HIGHLEVEL'
}

export const enum Status {
    EXIST = 'EXIST',
    DELETED = 'DELETED'
}

export interface ITeacher {
    id?: number;
    identityNumber?: string;
    fullName?: string;
    phone?: string;
    doB?: Moment;
    address?: string;
    email?: string;
    password?: string;
    dataStorage?: number;
    usedStorage?: number;
    level?: TeacherLevel;
    status?: Status;
    avatar?: string;
    teachers?: ITeacherDocument[];
}

export class Teacher implements ITeacher {
    constructor(
        public id?: number,
        public identityNumber?: string,
        public fullName?: string,
        public phone?: string,
        public doB?: Moment,
        public address?: string,
        public email?: string,
        public password?: string,
        public dataStorage?: number,
        public usedStorage?: number,
        public level?: TeacherLevel,
        public status?: Status,
        public avatar?: string,
        public teachers?: ITeacherDocument[]
    ) {}
}
