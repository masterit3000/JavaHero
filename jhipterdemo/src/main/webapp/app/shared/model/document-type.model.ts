import { IDocument } from 'app/shared/model/document.model';

export interface IDocumentType {
    id?: number;
    content?: string;
    documents?: IDocument[];
}

export class DocumentType implements IDocumentType {
    constructor(public id?: number, public content?: string, public documents?: IDocument[]) {}
}
