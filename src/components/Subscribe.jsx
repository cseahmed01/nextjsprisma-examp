import React from 'react';

const Subscribe = () => {
    return (
        <div className='container bg-light pb-5'>
            <div className='row d-flex justify-content-center'>
                <div className="col-md-6 offset-md-1 mb-3">
                    <form>
                        <h4 className='text-success d-flex justify-content-center'>Subscribe</h4>
                        <p className='h1 d-flex justify-content-center'>Subscribe to get the latest news about us.</p>
                        <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                            <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                            <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                            <button className="btn btn-primary" type="button">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Subscribe;
