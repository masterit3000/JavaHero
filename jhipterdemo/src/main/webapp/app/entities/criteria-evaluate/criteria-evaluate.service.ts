import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { ICriteriaEvaluate } from 'app/shared/model/criteria-evaluate.model';

type EntityResponseType = HttpResponse<ICriteriaEvaluate>;
type EntityArrayResponseType = HttpResponse<ICriteriaEvaluate[]>;

@Injectable({ providedIn: 'root' })
export class CriteriaEvaluateService {
    public resourceUrl = SERVER_API_URL + 'api/criteria-evaluates';

    constructor(protected http: HttpClient) {}

    create(criteriaEvaluate: ICriteriaEvaluate): Observable<EntityResponseType> {
        return this.http.post<ICriteriaEvaluate>(this.resourceUrl, criteriaEvaluate, { observe: 'response' });
    }

    update(criteriaEvaluate: ICriteriaEvaluate): Observable<EntityResponseType> {
        return this.http.put<ICriteriaEvaluate>(this.resourceUrl, criteriaEvaluate, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<ICriteriaEvaluate>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<ICriteriaEvaluate[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
}
