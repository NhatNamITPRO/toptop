import { Fragment } from 'react';

import Header from '~/components/Header';
function HeaderOnly({children}) {
    return (
        <Fragment>
            <Header />
            <div className='container'>
                <div className='content'>{children}</div>
            </div>
        </Fragment>
    );
}

export default HeaderOnly;