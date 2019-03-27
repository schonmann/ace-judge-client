import { LanguageEnum } from '../enum/language-enum';

export class LanguageHelper {

    static getStatusNameByEnumValue(value: string): string {
        switch (value) {
            case LanguageEnum.C:
                return "C"
            case LanguageEnum.CPP:
                return "C++"
            case LanguageEnum.JAVA:
                return "Java"
            case LanguageEnum.PYTHON:
                return "Python"
            default:
                return "ENUM_ERROR"
        }
    }

    static getStatusColorByEnumValue(value: string): string {
        switch (value) {
            case LanguageEnum.C:
                return ""
            case LanguageEnum.CPP:
                return ""
            case LanguageEnum.JAVA:
                return ""
            case LanguageEnum.PYTHON:
                return ""
            default:
                return "ENUM_ERROR"
        }
    }
}