import { ProblemCategoryEnum } from '../enum/problem-category-enum';

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
                return ""
            case ProblemCategoryEnum.COMPUTATIONAL_GEOMETRY:
                return ""
            case ProblemCategoryEnum.DYNAMIC_PROGRAMMING:
                return ""
            case ProblemCategoryEnum.NUMBER_THEORY:
                return ""
            default:
                return "ENUM_ERROR"
        }
    }
}''