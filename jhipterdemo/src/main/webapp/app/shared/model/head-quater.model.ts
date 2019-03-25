export interface IHeadQuater {
    id?: number;
    name?: string;
}

export class HeadQuater implements IHeadQuater {
    constructor(public id?: number, public name?: string) {}
}
