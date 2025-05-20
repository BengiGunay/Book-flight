import { createBrowserRouter } from 'react-router-dom'
import { SearchFlight } from './pages/search-flight/search-flight'
import { Layout } from './pages/layout/layout'
import { BookFlight } from './pages/book-flight/book-flight'
import { Result } from './pages/result/result'

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, path: '/', element: <SearchFlight /> },
            {
                path: '/flight-list',
                element: <BookFlight />,
            },
            {
                path: '/result',
                element: <Result />,
            },
        ],
    },
])
