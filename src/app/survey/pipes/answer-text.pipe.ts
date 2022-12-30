import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'answerText'
})
export class AnswerTextPipe implements PipeTransform {

    transform(value: Record<string, string | number>): string {
        return Object.keys(value)[0];
    }

}
