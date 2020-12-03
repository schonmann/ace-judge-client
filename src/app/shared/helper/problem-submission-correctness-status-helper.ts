import { ProblemSubmissionCorrectnessStatusEnum } from '../enum/problem-submission-correctness-status-enum';

export class ProblemSubmissionCorrectnessStatusHelper {

    static getStatusNameByEnumValue(value: string): string {
        switch (value) {
            case ProblemSubmissionCorrectnessStatusEnum.JUDGE_QUEUE:
                return "Fila"
            case ProblemSubmissionCorrectnessStatusEnum.CORRECT_ANSWER:
                return "Resposta Correta"
            case ProblemSubmissionCorrectnessStatusEnum.COMPILE_ERROR:
                return "Erro de Compilação"
            case ProblemSubmissionCorrectnessStatusEnum.JUDGE_QUEUE:
                return "Fila"
            case ProblemSubmissionCorrectnessStatusEnum.RUNTIME_ERROR:
                return "Erro de Execução"
            case ProblemSubmissionCorrectnessStatusEnum.WRONG_ANSWER:
                return "Resposta Incorreta"
            case ProblemSubmissionCorrectnessStatusEnum.WRONG_COMPLEXITY:
                return "Complexidade Incorreta"
            case ProblemSubmissionCorrectnessStatusEnum.TIME_LIMIT_EXCEEDED:
                return "Tempo Limite Excedido"
            default:
                return "ENUM_ERROR"
        }
    }

    static getStatusColorByEnumValue(value: string): string {
        switch (value) {
            case ProblemSubmissionCorrectnessStatusEnum.CORRECT_ANSWER:
                return "#50C878"
            case ProblemSubmissionCorrectnessStatusEnum.COMPILE_ERROR:
                return "#FF0000"
            case ProblemSubmissionCorrectnessStatusEnum.JUDGE_QUEUE:
                return "#AAAAAA"
            case ProblemSubmissionCorrectnessStatusEnum.RUNTIME_ERROR:
                return "#FF0000"
            case ProblemSubmissionCorrectnessStatusEnum.WRONG_ANSWER:
                return "#FF0000"
            case ProblemSubmissionCorrectnessStatusEnum.WRONG_COMPLEXITY:
                return "#FF0000"
            case ProblemSubmissionCorrectnessStatusEnum.TIME_LIMIT_EXCEEDED:
                return "#FF0000"
            default:
                return ""
        }
    }
}