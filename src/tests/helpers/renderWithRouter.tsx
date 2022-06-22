import {MemoryRouter} from "react-router-dom";
import AppRouter from "../../router/AppRouter";

export const renderWithRouter = (initialRoute: string = '/') => {
    return(
        <MemoryRouter initialEntries={[initialRoute]}>
            <AppRouter/>
        </MemoryRouter>
    )
}