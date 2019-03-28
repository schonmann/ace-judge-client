export class Problem {
    id : number
    name : string
    score: number
    acceptedComplexities : string
    visibility : string
    difficulty : string
    category : string
    problemDescription : string
    constraintDescription : string
    exampleInput : string
    exampleOutput : string
    judgeInput : File
    judgeOutput : File
    inputGenerator : File

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