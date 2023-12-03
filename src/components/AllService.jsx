async function getData() {
    const res = await fetch(process.env.BASE_URL + "api/AllService");
    if (!res.ok) {
        throw new Error("Testimonial List Calling Fail");
    }
    return res.json();
}


const AllService = async () => {

    const data = await getData();
    const containerStyle = {
        height: '250px', // Set the desired height
        backgroundColor: '#f0f0f0', // Set the desired background color
        padding: '20px', // Add padding if needed
    };
    return (
        <>
            <div className='container' style={containerStyle}>
                <div className="container">
                    <div className="row">
                        <div className="jumbotron">
                            <h1 className="display-4 fw-bold text-dark">Our Service</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item h5"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item  text-success h5" aria-current="page">Our Service</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container bg-light">
                <div className="row pb-5">
                    <div className="jumbotron">
                        <h5 className="h5 fw-bold text-success">Our All Services</h5>
                        <h3 className="h fw-bold text-dark">We Provide Best web Design Service</h3>
                    </div>
                </div>
                <div className="row mb-5">

                    {
                        data.map((item, index) => {
                            return (
                                <div className="col-md-6 text-center gy-2 pb-4" key={item.id}>
                                    <div className="card">
                                        <div className="card-body">
                                            <h2 className="card-title text-bold">{item.title}</h2>
                                        </div>
                                        <p>{item.des}</p>
                                        <img src={item.image1} className="card-img-top" alt="..." />

                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </>
    );
}

export default AllService;
