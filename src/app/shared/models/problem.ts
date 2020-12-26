export class Problem {
    id : number
    name : string
    bigoNotation : string
    complexities : string
    score: number
    visibility : string
    difficulty : string
    category : string
    problemDescription : string
    constraintDescription : string
    exampleInput : string
    exampleOutput : string
    judgeInput : File
    judgeOutput : File
    judgeAnswerKeyProgram  : File
    judgeAnswerKeyProgramLanguage : string
    inputGenerator : File
    inputGeneratorLanguage : string
    editable? : boolean

    toString() {
        return `${this.id}|${this.name}`
    }
    
    static fromString(str : string) : Problem {
        const [ id, name ] = str.split("|")
        let p = new Problem()
        p.id = parseInt(id)
        p.name = name
        return p
    }
}