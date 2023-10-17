import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Cart } from '../Component/Cart/cart'
import { Home } from '../Component/Home/home'
import Nav from '../Layout/Nav'


export const Index = () => {
    return (
        <BrowserRouter>
            <Nav />
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/cart' element={<Cart />} />
                </Routes>
            </main>
        </BrowserRouter>
    )
}
