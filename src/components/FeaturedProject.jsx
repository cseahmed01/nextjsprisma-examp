async function getData() {
    const res = await fetch(process.env.BASE_URL + "api/FeaturedProject");
    if (!res.ok) {
        throw new Error("Testimonial List Calling Fail");
    }
    return res.json();
}
const FeaturedProject = async () => {

    const data = await getData()
    return (
        <>
            <div className="container pb-5" style={{ backgroundColor: '#F0FDF4' }}>
                <div className="row pb-5">
                    <div className="jumbotron">
                        <h5 className="h5 fw-bold text-success">Featured Project</h5>
                        <h3 className=" fw-bold text-dark">We provide the Perfect Solution to your business growth</h3>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className='col-md-6'>
                        <div className="col-md-12 text-center">
                            <div className="card"  >
                                <img
                                    src="https://agency.teamrabbil.com/files/shutterstock-1702515205.jpg"
                                    alt="Image 1"
                                    className="img-fluid rounded"
                                />
                                <div className="card-body">
                                    <p className=''>pp Design - June 20, 2022</p>
                                    <h5 className="card-title text-bold">Redesign channel website landng page</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6' id='second_div'>
                        {
                            // Create rows with two items each
                            Array.from({ length: Math.ceil(data.length / 2) }).map((_, rowIndex) => (
                                <div className="row mb-4" key={rowIndex}>
                                    {
                                    
                                    data.slice(rowIndex * 2, rowIndex * 2 + 2).map((item, index) => (
                                        <div className="col-md-6" key={item.id}>
                                            <div className="card">
                                                <img src={item.image} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <p className="">{item.created_at}</p>
                                                    <h5 className="card-title text-bold">{item.title}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                    
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default FeaturedProject;
