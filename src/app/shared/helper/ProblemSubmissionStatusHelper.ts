import { ProblemSubmissionStatusEnum } from '../enum/ProblemSubmissionStatusEnum';

export class ProblemSubmissionStatusHelper {

    static getNameByEnumValue(value: string): string {
        switch (value) {
            case ProblemSubmissionStatusEnum.JUDGE_QUEUE:
                return "Fila"
            case ProblemSubmissionStatusEnum.CORRECT_ANSWER:
                return "Resposta Correta"
            case ProblemSubmissionStatusEnum.COMPILE_ERROR:
                return "Erro de Compilação"
            case ProblemSubmissionStatusEnum.JUDGE_QUEUE:
                return "Fila"
            case ProblemSubmissionStatusEnum.RUNTIME_ERROR:
                return "Erro de Execução"
            case ProblemSubmissionStatusEnum.WRONG_ANSWER:
                return "Resposta Incorreta"
            case ProblemSubmissionStatusEnum.WRONG_COMPLEXITY:
                return "Complexidade Incorreta"
            default:
                return "ENUM_ERROR"
        }
    }

    static getColorByEnumValue(value: string): string {
        switch (value) {
            case ProblemSubmissionStatusEnum.CORRECT_ANSWER:
                return "#50C878"
            case ProblemSubmissionStatusEnum.COMPILE_ERROR:
                return "#FF0000"
            case ProblemSubmissionStatusEnum.JUDGE_QUEUE:
                return "#AAAAAA"
            case ProblemSubmissionStatusEnum.RUNTIME_ERROR:
                return "#FF0000"
            case ProblemSubmissionStatusEnum.WRONG_ANSWER:
                return "#FF0000"
            case ProblemSubmissionStatusEnum.WRONG_COMPLEXITY:
                return "#FF0000"
            default:
                return "ENUM_ERROR"
        }
    }
}