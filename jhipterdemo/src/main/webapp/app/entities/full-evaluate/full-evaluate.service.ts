import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IFullEvaluate } from 'app/shared/model/full-evaluate.model';

type EntityResponseType = HttpResponse<IFullEvaluate>;
type EntityArrayResponseType = HttpResponse<IFullEvaluate[]>;

@Injectable({ providedIn: 'root' })
export class FullEvaluateService {
    public resourceUrl = SERVER_API_URL + 'api/full-evaluates';

    constructor(protected http: HttpClient) {}

    create(fullEvaluate: IFullEvaluate): Observable<EntityResponseType> {
        return this.http.post<IFullEvaluate>(this.resourceUrl, fullEvaluate, { observe: 'response' });
    }

    update(fullEvaluate: IFullEvaluate): Observable<EntityResponseType> {
        return this.http.put<IFullEvaluate>(this.resourceUrl, fullEvaluate, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<IFullEvaluate>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<IFullEvaluate[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
}
