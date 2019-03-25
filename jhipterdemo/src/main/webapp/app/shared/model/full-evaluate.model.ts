import { ITeacher } from 'app/shared/model/teacher.model';

export interface IFullEvaluate {
    id?: number;
    description?: string;
    teacher?: ITeacher;
}

export class FullEvaluate implements IFullEvaluate {
    constructor(public id?: number, public description?: string, public teacher?: ITeacher) {}
}
