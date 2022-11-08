import React from 'react';

const Head = () => {
    return (
        <>
            <section className="head">
                <div className="container d_flex">
                    <div className="left row">
                        <i className="fa fa-phone"></i>
                        <label>+982342 8990 645</label>
                        <i className='fa fa-envelope'></i>
                        <label>exa@gmail.com</label>
                    </div>
                    <div className="right row RText">
                        <label>Theme FAQ's</label>
                        <label>Need Help</label>
                        <span>flag1</span>
                        <label htmlFor=''>EN</label>
                        <span>flag2</span>
                        <label htmlFor=''>USA</label>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Head;