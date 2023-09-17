import { Link, Routes, Route } from 'react-router-dom';

import { publicRoutes } from './roots';
function App() {
    return (
        <div className="App">
            <Routes>
                {publicRoutes.map((publicRoute, index) => {
                    const Element = publicRoute.component;
                    return (
                        <Route
                            key={index}
                            path={publicRoute.path}
                            element={<Element />}
                        ></Route>
                    );
                })}
            </Routes>
        </div>
    );
}

export default App;
