import { ITeacher } from 'app/shared/model/teacher.model';
import { IDocument } from 'app/shared/model/document.model';

export const enum Role {
    OWNER = 'OWNER',
    SHARED = 'SHARED'
}

export interface ITeacherDocument {
    id?: number;
    role?: Role;
    teacher?: ITeacher;
    document?: IDocument;
}

export class TeacherDocument implements ITeacherDocument {
    constructor(public id?: number, public role?: Role, public teacher?: ITeacher, public document?: IDocument) {}
}
