import { render, screen} from '@testing-library/react';
import Dashboard from './Dashboard';
import {ICard} from "../types/types";

describe('get cards data', () => {

    let response: ICard[];
    beforeEach(() => {

        response = [
            {
                "id": 1,
                "title": "7 Skills of Highly Effective Programmers",
                "description": "Our team was inspired by the seven skills of highly effective programmers created by the TechLead. We wanted to provide our own take on the topic...",
                "author": {
                    "name": "Nicholas Gogol",
                    "profileImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXe8UtbXINAQwwFR9VhmUSl_2PYWJ_jjiu0StugKEF-o1-DAPzUikHQtjKfE9GP2C4BnM&usqp=CAU"
                },
                "category": "PRODUCTIVITY",
                "createdDate": new Date("2014-01-01T23:28:56.782Z")
            },
            {
                "id": 2,
                "title": "SMM starter pack, part 2: content promotion",
                "description": "This is the second part of the SMM starter pack series of articles. If you made it this far, you must be willing to learn about promoting business through social media. ",
                "author": {
                    "name": "Mona Lisa",
                    "profileImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1280px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"
                },
                "category": "MEDIA",
                "createdDate": new Date("2015-01-01T23:28:56.782Z")
            }
        ]
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve<ICard[]>(response),
            }),
        ) as jest.Mock;
    })
    test('fetching data from API', async () => {
        render(<Dashboard/>);
        const cards = await screen.findAllByTestId('card-testid');
        expect(cards.length).toBe(2)
        expect(fetch).toBeCalledTimes(1);
    });
})

