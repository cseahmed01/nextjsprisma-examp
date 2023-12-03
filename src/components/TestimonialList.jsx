async function getData() {
    const res = await fetch(process.env.BASE_URL + "api/TestimonialList");
    if (!res.ok) {
        throw new Error("Testimonial List Calling Fail");
    }
    return res.json();
}

const TestimonialList = async () => {

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
                            <h1 className="display-4 fw-bold text-dark">Testimonial List</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item h5"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item  text-success h5" aria-current="page">Testimonial List</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>






            <div className="container bg-light">
                <div className="row pb-5">
                    <div className="jumbotron">
                        <h5 className="h5 fw-bold text-success">TESTIMONIAL LIST</h5>
                        <h3 className="h fw-bold text-dark">Better Agency/SEO Solution At Your FinguerPrint</h3>
                    </div>
                </div>
                <div className="row">
                    {data.map((item, index) => {
                        return (
                            <div className="col-md-4 text-center gy-2" key={item.id}>
                                <div className="card shadow-sm">
                                    <img src={item.image} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <p className="text-muted">{item.msg}</p>
                                        <h2 className="card-title text-bold">{item.name}</h2>
                                        <h5>{item.designation}</h5>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

        </>

    );
}

export default TestimonialList;
