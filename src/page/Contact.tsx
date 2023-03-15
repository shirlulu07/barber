import Form from './Contact/Form'
import Information from './Contact/Information'
function Contact() {
    const headStyle = "text-yellow-400 text-xl sm:text-4xl font-crimson"
    const headStyle1 = "text-gray-400 text-lg font-crimson"

    return (
        <div className='px-10 py-20 sm:px-40' id="contact">
            <div className='text-center'>
                <h3 className={headStyle1}>CONTACT US</h3>
                <h1 className={headStyle}>MAKE AN APPOINTMENT NOW</h1>
            </div>
            <div className='flex flex-col sm:flex-row sm:gap-20 py-10'>
                <div className='sm:w-1/2'>
                    <p className="">
                        lorem ipsum dolor sit amet consectetuer adipiscing elit sed do eiqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labusmod tempor incididunt ut labore et dolore magna alioris nisi ut alisquip ex ea commando consequat.
                    </p>
                    <Information />
                </div>
                < Form />
            </div>
        </div >
    )
}

export default Contact