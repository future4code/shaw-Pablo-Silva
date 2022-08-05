import HomePage from '../Pages/HomePage'
import HistoryPage from '../Pages/HistoryPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const Router = () => {
    return (
        <BrowserRouter>

        <Routes>

            <Route index element={<HomePage />} />
            <Route path='HistoryPage' element={<HistoryPage />} />
                 
            

        </Routes>


    </BrowserRouter>
    ) 
    


    
}