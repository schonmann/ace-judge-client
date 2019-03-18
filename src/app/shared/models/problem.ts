export class Problem {
    id : number
    name : string
    acceptedComplexities : string
    visibility : string
    difficulty : string
    category : string
    problemDescription : string
    constraintDescription : string
    exampleInput : string
    exampleOutput : string

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