import { ProblemVisibilityEnum } from '../enum/ProblemVisibilityEnum';

export class ProblemVisibilityHelper {

    static getStatusNameByEnumValue(value: string): string {
        switch (value) {
            case ProblemVisibilityEnum.PRIVATE:
                return "Privado"
            case ProblemVisibilityEnum.PUBLIC:
                return "Público"
            default:
                return "ENUM_ERROR"
        }
    }
}