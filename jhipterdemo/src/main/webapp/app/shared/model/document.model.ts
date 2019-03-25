import { ITeacherDocument } from 'app/shared/model/teacher-document.model';
import { IDocumentType } from 'app/shared/model/document-type.model';

export const enum Status {
    EXIST = 'EXIST',
    DELETED = 'DELETED'
}

export interface IDocument {
    id?: number;
    name?: string;
    description?: string;
    uRL?: string;
    size?: number;
    tag?: string;
    status?: Status;
    documents?: ITeacherDocument[];
    documentTypes?: IDocumentType[];
}

export class Document implements IDocument {
    constructor(
        public id?: number,
        public name?: string,
        public description?: string,
        public uRL?: string,
        public size?: number,
        public tag?: string,
        public status?: Status,
        public documents?: ITeacherDocument[],
        public documentTypes?: IDocumentType[]
    ) {}
}
