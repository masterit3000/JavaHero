export interface ICriteriaType {
    id?: number;
    content?: string;
    level?: number;
}

export class CriteriaType implements ICriteriaType {
    constructor(public id?: number, public content?: string, public level?: number) {}
}
