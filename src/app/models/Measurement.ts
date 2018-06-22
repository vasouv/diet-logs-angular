export class Measurement {
    id: number;
    measuredate: any;
    weightkg: number;
    bmi: number;

    constructor(id: number, measuredate: any, weightkg: number, bmi: number) {
        this.id = id;
        this.measuredate = measuredate;
        this.weightkg = weightkg;
        this.bmi = bmi;
    }
}