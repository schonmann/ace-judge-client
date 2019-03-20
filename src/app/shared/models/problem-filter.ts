import { ProblemVisibilityEnum } from '../enum/problem-visibility-enum';

export class ProblemFilter {
    id? : number
    name? : string
    category? : string
    difficulty? : string
    visibility? : ProblemVisibilityEnum
}