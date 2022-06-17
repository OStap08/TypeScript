export interface ICard {
    id: number;
    title: string;
    description: string;
    author: IAuthor;
    category: string;
    createdDate: Date;
}

export interface IAuthor {
    name: string,
    profileImg: string
}