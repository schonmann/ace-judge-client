import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ProblemDifficultyHelper } from '../helper/problem-difficulty-helper';

@Pipe({ name: 'problemDifficulty', pure: false })
export class ProblemDifficultyPipe implements PipeTransform {
  constructor() {
  }

  transform(content) {
    const name = ProblemDifficultyHelper.getStatusNameByEnumValue(content)
    const color = ProblemDifficultyHelper.getStatusColorByEnumValue(content)
    return `<span style="color: ${color};">${name}</span>`
  }
}