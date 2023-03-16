import Card from '../component/Card';
import Img2 from '../image/6.png';
import Img3 from '../image/7.png';
import Img4 from '../image/8.png';

const haircuts = [
    { Img: Img2, Cut: "Regular Cut" },
    { Img: Img3, Cut: "Clipper Cut" },
    { Img: Img4, Cut: "Razor Shaver" }
];

function Services() {
    const buttonStyle2 = "text-white bg-gray-500 border-2 border-gray-500 w-40 h-10 rounded-3xl my-1 hover:bg-yellow-400 hover:border-yellow-400"
    return (
        <div className='text-center px-10 py-20 sm:px-40 bg-gray-100' id="services">
            <h3 className='headStyle1'>NOTHING BUT THE BEST</h3>
            <h1 className='headStyle' >OUR SERVICES</h1>
            <div className='flex flex-col gap-5 sm:flex-row justify-center sm:justify-center items-center py-5'>
                {haircuts.map((haircut, index) => (
                    <Card key={index} Img={haircut.Img} Cut={haircut.Cut} />
                ))}
            </div>
        </div>
    )
}



export default Services