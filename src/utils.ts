import { Question, QuestionsType } from './types';

export class Storage {
    static setItem(name: string, data: QuestionsType | number | string) {
        localStorage.setItem(name, JSON.stringify(data));
    }
    static getItem(key: string) {
        if (!key || typeof window === 'undefined') {
            return '';
        }
        return JSON.parse(localStorage.getItem(key) || '""');
    }
    static removeItem(name: string) {
        localStorage.removeItem(name);
    }
}

export const getScore = (questionsResult: QuestionsType) => {
    return questionsResult?.reduce(
        (acc: number, curr: Question) => (curr.answer.includes(curr.result) ? acc + 1 : acc),
        0,
    );
};

export const getPercent = (questionsResult: QuestionsType) => {
    const result = questionsResult?.reduce(
        (acc: number, curr: Question) => (curr.answer.includes(curr.result) ? acc + 1 : acc),
        0,
    );
    return (result / questionsResult.length) * 100;
};
