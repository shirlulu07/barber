import Card from '../component/Card';
import Img2 from '../image/6.png';
import Img3 from '../image/7.png';
import Img4 from '../image/8.png';
function Services() {
    return (
        <div className='text-center px-10 py-20 sm:px-40 bg-gray-100' id="services">
            <h3 className="headStyle1">NOTHING BUT THE BEST</h3>
            <h1 className="headStyle" >OUR SERVICES</h1>
            <div className='flex flex-col gap-5 sm:flex-row justify-center sm:justify-between items-center py-5'>
                <Card Img={Img2} Cut="Regular Cut" />
                <Card Img={Img3} Cut="Clipper Cut" />
                <Card Img={Img4} Cut="Razor Shaver" />
            </div>
        </div>
    )
}

export default Services