import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { ITeacherDocument } from 'app/shared/model/teacher-document.model';

type EntityResponseType = HttpResponse<ITeacherDocument>;
type EntityArrayResponseType = HttpResponse<ITeacherDocument[]>;

@Injectable({ providedIn: 'root' })
export class TeacherDocumentService {
    public resourceUrl = SERVER_API_URL + 'api/teacher-documents';

    constructor(protected http: HttpClient) {}

    create(teacherDocument: ITeacherDocument): Observable<EntityResponseType> {
        return this.http.post<ITeacherDocument>(this.resourceUrl, teacherDocument, { observe: 'response' });
    }

    update(teacherDocument: ITeacherDocument): Observable<EntityResponseType> {
        return this.http.put<ITeacherDocument>(this.resourceUrl, teacherDocument, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<ITeacherDocument>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<ITeacherDocument[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
}
