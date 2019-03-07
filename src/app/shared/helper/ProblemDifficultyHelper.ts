import { ProblemDifficultyEnum } from '../enum/ProblemDifficultyEnum';

export class ProblemDifficultyHelper {

    static getStatusNameByEnumValue(value: string): string {
        switch (value) {
            case ProblemDifficultyEnum.EASY:
                return "Fácil"
            case ProblemDifficultyEnum.MEDIUM:
                return "Médio"
            case ProblemDifficultyEnum.HARD:
                return "Difícil"
            case ProblemDifficultyEnum.EXPERT:
                return "Expert"
            default:
                return "ENUM_ERROR"
        }
    }

    static getStatusColorByEnumValue(value: string): string {
        switch (value) {
            case ProblemDifficultyEnum.EASY:
                return "#50C878"
            case ProblemDifficultyEnum.MEDIUM:
                return "orange"
            case ProblemDifficultyEnum.HARD:
                return "red"
            case ProblemDifficultyEnum.EXPERT:
                return "purple"
            default:
                return "ENUM_ERROR"
        }
    }
}