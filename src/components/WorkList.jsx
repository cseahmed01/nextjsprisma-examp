async function getData() {
    const res = await fetch(process.env.BASE_URL + "api/WorkList");
    if (!res.ok) {
        throw new Error("Testimonial List Calling Fail");
    }
    return res.json();
}

const WorkList = async() => {

    const data = await getData();
    return (
        <div className="container mt-5">
        <div className="row">
            <h5 className='text-success mb-5'>Work List</h5>
            <p className='h3'>We provide the Perfect Solution to your business growth</p>

            {
                data.map((item, index) => {
                    return (
                        <div className="col-md-4">
                            <div className="card h-100 border text-center">
                                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                                    <div className="custom-div">
                                        <div className="inner-content">
                                         
                                        </div>
                                    </div>
                                    <h1>{item.title}</h1>
                                    <p className="card-title">{item.des}</p>
                                    <button className='btn btn-warning'>Learn More</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
    );
}

export default WorkList;
