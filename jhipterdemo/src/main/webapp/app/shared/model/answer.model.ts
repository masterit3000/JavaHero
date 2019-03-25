import { IFullEvaluate } from 'app/shared/model/full-evaluate.model';
import { ICriteriaEvaluate } from 'app/shared/model/criteria-evaluate.model';

export const enum ScoreLadder {
    FAIL = 'FAIL',
    PASS = 'PASS',
    GOOD = 'GOOD',
    EXCELLENT = 'EXCELLENT'
}

export interface IAnswer {
    id?: number;
    scoreLadder?: ScoreLadder;
    proof?: string;
    fullEvaluate?: IFullEvaluate;
    critetiaEvaluate?: ICriteriaEvaluate;
}

export class Answer implements IAnswer {
    constructor(
        public id?: number,
        public scoreLadder?: ScoreLadder,
        public proof?: string,
        public fullEvaluate?: IFullEvaluate,
        public critetiaEvaluate?: ICriteriaEvaluate
    ) {}
}
