import { ProblemSubmissionAnalysisStatusEnum } from '../enum/problem-submission-analysis-status-enum';

export class ProblemSubmissionAnalysisStatusHelper {

    static getStatusNameByEnumValue(value: string): string {
        switch (value) {
            case ProblemSubmissionAnalysisStatusEnum.JUDGE_QUEUE:
                return "Fila"
            case ProblemSubmissionAnalysisStatusEnum.RUNTIME_ERROR:
                return "Erro de Execução"
            case ProblemSubmissionAnalysisStatusEnum.WRONG_COMPLEXITY:
                return "Complexidade Incorreta"
            case ProblemSubmissionAnalysisStatusEnum.COMPILE_ERROR:
                return "Erro de Compilação"
            case ProblemSubmissionAnalysisStatusEnum.CORRECT_COMPLEXITY:
                return "Complexidade Correta"
            default:
                return "ENUM_ERROR"
        }
    }

    static getStatusColorByEnumValue(value: string): string {
        switch (value) {
            case ProblemSubmissionAnalysisStatusEnum.JUDGE_QUEUE:
                return "#AAAAAA"
            case ProblemSubmissionAnalysisStatusEnum.RUNTIME_ERROR:
                return "#FF0000"
            case ProblemSubmissionAnalysisStatusEnum.WRONG_COMPLEXITY:
                return "#FF0000"
            case ProblemSubmissionAnalysisStatusEnum.COMPILE_ERROR:
                return "#FF0000"
            case ProblemSubmissionAnalysisStatusEnum.CORRECT_COMPLEXITY:
                    return "#50C878"
            default:
                return ""
        }
    }
}