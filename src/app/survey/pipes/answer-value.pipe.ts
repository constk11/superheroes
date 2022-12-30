import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'answerValue'
})
export class AnswerValuePipe implements PipeTransform {

    transform(value: Record<string, string | number>): string | number {
        return Object.values(value)[0];
    }

}
