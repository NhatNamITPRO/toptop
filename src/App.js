import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import { DefaultLayout } from './components/Layouts';
import { publicRoutes } from './roots';
function App() {
    const [show, setShow] = useState(false);
    return (
        <div className="App">
            <Routes>
                {publicRoutes.map((publicRoute, index) => {
                    const Page = publicRoute.component;
                    let Layout = DefaultLayout;
                    if (publicRoute.layout) {
                        Layout = publicRoute.layout;
                    } else if (publicRoute.layout === null) {
                        Layout = Fragment;
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
