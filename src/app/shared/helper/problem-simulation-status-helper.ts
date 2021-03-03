import { ProblemSimulationStatusEnum } from '../enum/problem-simulation-status-enum';

export class ProblemSimulationStatusHelper {

    static getStatusNameByEnumValue(value: string): string {
        switch (value) {
            case ProblemSimulationStatusEnum.JUDGE_QUEUE:
                return "Fila"
            case ProblemSimulationStatusEnum.READY:
                return "Pronto"
            case ProblemSimulationStatusEnum.RUNTIME_ERROR:
                return "Erro de Execução"
            case ProblemSimulationStatusEnum.WRONG_ANSWER:
                return "Resposta Incorreta"
            case ProblemSimulationStatusEnum.WRONG_COMPLEXITY:
                return "Complexidade Incorreta"
            case ProblemSimulationStatusEnum.COMPILE_ERROR:
                return "Erro de Compilação"
            case ProblemSimulationStatusEnum.GENERIC_ERROR:
                return "Erro de Análise"
            default:
                return "ENUM_ERROR"
        }
    }

    static getStatusColorByEnumValue(value: string): string {
        switch (value) {
            case ProblemSimulationStatusEnum.READY:
                return "#50C878"
            case ProblemSimulationStatusEnum.JUDGE_QUEUE:
                return "#AAAAAA"
            case ProblemSimulationStatusEnum.RUNTIME_ERROR:
                return "#FF0000"
            case ProblemSimulationStatusEnum.WRONG_ANSWER:
                return "#FF0000"
            case ProblemSimulationStatusEnum.WRONG_COMPLEXITY:
                return "#FF0000"
            case ProblemSimulationStatusEnum.COMPILE_ERROR:
                return "#FF0000"
            case ProblemSimulationStatusEnum.GENERIC_ERROR:
                return "#FF0000"
            default:
                return ""
        }
    }
}