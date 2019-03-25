import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IHeadQuater } from 'app/shared/model/head-quater.model';

type EntityResponseType = HttpResponse<IHeadQuater>;
type EntityArrayResponseType = HttpResponse<IHeadQuater[]>;

@Injectable({ providedIn: 'root' })
export class HeadQuaterService {
    public resourceUrl = SERVER_API_URL + 'api/head-quaters';

    constructor(protected http: HttpClient) {}

    create(headQuater: IHeadQuater): Observable<EntityResponseType> {
        return this.http.post<IHeadQuater>(this.resourceUrl, headQuater, { observe: 'response' });
    }

    update(headQuater: IHeadQuater): Observable<EntityResponseType> {
        return this.http.put<IHeadQuater>(this.resourceUrl, headQuater, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<IHeadQuater>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<IHeadQuater[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
}
