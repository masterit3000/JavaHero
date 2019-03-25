import { ICriteriaType } from 'app/shared/model/criteria-type.model';

export interface ICriteriaEvaluate {
    id?: number;
    content?: string;
    level?: number;
    pass?: string;
    good?: string;
    excellent?: string;
    criteriaType?: ICriteriaType;
}

export class CriteriaEvaluate implements ICriteriaEvaluate {
    constructor(
        public id?: number,
        public content?: string,
        public level?: number,
        public pass?: string,
        public good?: string,
        public excellent?: string,
        public criteriaType?: ICriteriaType
    ) {}
}
