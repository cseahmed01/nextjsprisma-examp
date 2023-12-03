async function getData() {
    const res = await fetch(process.env.BASE_URL + "api/StatList");
    if (!res.ok) {
        throw new Error("Testimonial List Calling Fail");
    }
    return res.json();
}

const StatList = async () => {



    const data = await getData()
    console.log(data);
    return (
        <>

            <div className="container mt-5 p-5">
                <div className="row">

                    <div className="col-md-3 text-center gy-2">
                        <div className="card">
                            <div className="card-body d-flex flex-column align-items-center justify-content-center">
                                <div className="custom-div">

                                    <div className="inner-content"></div>
                                </div>
                                <h1 className="mt-3">{data['followers']}</h1>
                                <h5 className="card-title">Followers</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 text-center gy-2">
                        <div className="card">
                            <div className="card-body d-flex flex-column align-items-center justify-content-center">
                                <div className="custom-div">

                                    <div className="inner-content"></div>
                                </div>
                                <h1 className="mt-3">{data['solved']}</h1>
                                <h5 className="card-title">Solved Problems</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 text-center gy-2">
                        <div className="card">
                            <div className="card-body d-flex flex-column align-items-center justify-content-center">
                                <div className="custom-div">

                                    <div className="inner-content"></div>
                                </div>
                                <h1 className="mt-3">{data['customers']}</h1>
                                <h5 className="card-title">Happy Customers</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 text-center gy-2">
                        <div className="card">
                            <div className="card-body d-flex flex-column align-items-center justify-content-center">
                                <div className="custom-div">

                                    <div className="inner-content"></div>
                                </div>
                                <h1 className="mt-3">{data['projects']}</h1>
                                <h5 className="card-title">Projects</h5>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default StatList;
