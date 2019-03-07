import { ProblemCategoryEnum } from '../enum/ProblemCategoryEnum';

export class ProblemCategoryHelper {

    static getStatusNameByEnumValue(value: string): string {
        switch (value) {
            case ProblemCategoryEnum.AD_HOC:
                return "Ad-Hoc"
            case ProblemCategoryEnum.COMPUTATIONAL_GEOMETRY:
                return "Geometria Comp."
            case ProblemCategoryEnum.DYNAMIC_PROGRAMMING:
                return "Programação Dinâmica"
            case ProblemCategoryEnum.NUMBER_THEORY:
                return "Teoria dos Números"
            default:
                return "ENUM_ERROR"
        }
    }

    static getStatusColorByEnumValue(value: string): string {
        switch (value) {
            case ProblemCategoryEnum.AD_HOC:
                return "#50C878"
            case ProblemCategoryEnum.COMPUTATIONAL_GEOMETRY:
                return "#50C878"
            case ProblemCategoryEnum.DYNAMIC_PROGRAMMING:
                return "#50C878"
            case ProblemCategoryEnum.NUMBER_THEORY:
                return "#50C878"
            default:
                return "ENUM_ERROR"
        }
    }
}