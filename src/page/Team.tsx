import Img6 from '../image/10.png';
import Img7 from '../image/11.png';
import Img5 from '../image/9.png';
import TeamCard from './../component/TeamCard';

function Team() {
    const headStyle = "text-yellow-400 text-4xl font-crimson sm:text-5xl"
    const headStyle1 = "text-gray-500 text-lg font-crimson"

    return (
        <div className='text-center px-10 py-20 sm:px-40' id="team">
            <h3 className={headStyle1}>PROFESSIONAL</h3>
            <h1 className={headStyle}>OUR TEAM</h1>
            <div className='flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-5 py-5'>
                <TeamCard img={Img5} name="PAUL NARCH" title="BARBER" />
                <TeamCard img={Img6} name="STEVEN JOSEPHIN" title="BARBER" />
                <TeamCard img={Img7} name="ALEXANDER DAVID" title="SHAVER" />

            </div >
        </div >
    )
}

export default Team