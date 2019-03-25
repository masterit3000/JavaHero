import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { ICriteriaType } from 'app/shared/model/criteria-type.model';

type EntityResponseType = HttpResponse<ICriteriaType>;
type EntityArrayResponseType = HttpResponse<ICriteriaType[]>;

@Injectable({ providedIn: 'root' })
export class CriteriaTypeService {
    public resourceUrl = SERVER_API_URL + 'api/criteria-types';

    constructor(protected http: HttpClient) {}

    create(criteriaType: ICriteriaType): Observable<EntityResponseType> {
        return this.http.post<ICriteriaType>(this.resourceUrl, criteriaType, { observe: 'response' });
    }

    update(criteriaType: ICriteriaType): Observable<EntityResponseType> {
        return this.http.put<ICriteriaType>(this.resourceUrl, criteriaType, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<ICriteriaType>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<ICriteriaType[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
}
