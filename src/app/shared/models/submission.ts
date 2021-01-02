export class Submission {
    id : number
    correctnessStatus : string
    analysisStatus : string
    analysisOutput : any
    category : string
    contest? : string
    problemId : number
    problemName: string
    submitDate? : Date
    language : string 
    runtime : number
}