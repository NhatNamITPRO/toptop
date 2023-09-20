import { Fragment } from 'react';
import { Link, Routes, Route } from 'react-router-dom';

import { DefaultLayout } from './components/Layouts';
import { publicRoutes } from './roots';
function App() {
    return (
        <div className="App">
            <Routes>
                {publicRoutes.map((publicRoute, index) => {
                    const Page = publicRoute.component;
                    let Layout = DefaultLayout;
                    if (publicRoute.layout){
                        Layout = publicRoute.layout
                    }else if(publicRoute.layout === null){
                        Layout = Fragment
                    }
                    return (
                        <Route
                            key={index}
                            path={publicRoute.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        ></Route>
                    );
                })}
            </Routes>
        </div>
    );
}

export default App;
