import Form from './Contact/Form'
import Information from './Contact/Information'
function Contact() {
    return (
        <div className='px-10 py-20 sm:px-40' id="contact">
            <div className='text-center'>
                <h3 className='headStyle1'>CONTACT US</h3>
                <h1 className='headStyle'>MAKE AN APPOINTMENT NOW</h1>
            </div>
            <div className='flex flex-col sm:flex-row sm:gap-20 py-10'>
                <div className='sm:w-1/2'>
                    <p className='textStyle text-gray-400'>
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