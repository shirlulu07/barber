import Img6 from '../image/10.png';
import Img7 from '../image/11.png';
import Img5 from '../image/9.png';
import TeamCard from './../component/TeamCard';

const staffs = [
    { Img: Img5, name: "PAUL NARCH", title: "BARBER" },
    { Img: Img6, name: "STEVEN JOSEPHIN", title: "BARBER" },
    { Img: Img7, name: "ALEXANDER DAVID", title: "RAZOE SHAVER" }
];

function Team() {
    return (
        <div className='text-center px-10 py-20 sm:px-40' id="team">
            <h3 className="headStyle1">PROFESSIONAL</h3>
            <h1 className="headStyle sm:text-5xl">OUR TEAM</h1>
            <div className='flex flex-col sm:flex-row justify-center sm:justify-center items-center gap-5 py-5'>
                {staffs.map((staff, index) => (
                  <TeamCard key={index} img={staff.Img} name={staff.name} title={staff.title} /> 
                ))}

            </div >
        </div >
    )
}

export default Team