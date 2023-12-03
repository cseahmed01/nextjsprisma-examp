async function getData() {
    const res = await fetch(process.env.BASE_URL + "api/BrandList");
    if (!res.ok) {
        throw new Error("Testimonial List Calling Fail");
    }
    return res.json();
}


async function HeloList(){

    const res2 = await fetch(process.env.BASE_URL + "api/HeroList");
    if (!res2.ok) {
        throw new Error("Testimonial List Calling Fail");
    }
    return res2.json();
}


const Hero = async() => {

    const data = await getData();

    const data2 = await HeloList();
 
    return (
        <>
         <div className="container" style={{ backgroundColor: '#D7F5DC' }}>
            <div className="row">
                <div className="col-md-6">
                    <h1 className='mt-5'>
                        Increase Your Customers Loyalty and Satisfaction
                    </h1>
                    <p className='mt-5'>
                        We help businesses like yours earn more customers, stand out from competitors, make more money
                    </p>
                    <button className='btn btn-success btn-lg'>Get Started</button>
                </div>
                <div className="col-md-6 mt-5">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={data2.image2}  className="img-fluid w-100 h-100" alt="..." />
                        </div>
                        <div className="col-md-6">
                            <img  src={data2.image1} className="img-fluid w-100 h-100" alt="..." />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-6">
                            <img src={data2.image3} className="img-fluid w-100 h-100" alt="..." />
                        </div>
                        <div className="col-md-6">
                            <img src={data2.image3} className="img-fluid w-100 h-100" alt="..." />
                        </div>
                    </div>
                </div>
            </div>

            <div className='row p-10 p-5 d-flex justify-content-center' style={{ backgroundColor: '#F8FFF9' }}>

                {
                    data.map((item, index) => {
                        return (
                            <div className="col-md-2 col-sm-6">
                                <img src={item.image} className="img-fluid w-20 h-20 mt-2" alt="..." />
                            </div>
                        )
                    })
                }
            </div>
        </div>
        </>
    );
}

export default Hero;
