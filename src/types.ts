
export type Question = {
    id: number | string;
    name: string;
    answer: string[];
    result: string;
    lists: string[];
};

export type QuestionsType = Question[];