function Form() {
    const buttonStyle2 = "text-white bg-yellow-400 border-2 border-yellow-400 w-40 h-10 rounded-3xl my-1 hover:bg-yellow-400"
    return (
        <div className='flex flex-col gap-2 sm:w-1/2'>
            <p className='textStyle text-gray-400'>Lorem ipsum dolor sit amet, consectetur elit, set do eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
            <form className='flex flex-col gap-1 pt-5'>
                <div className='flex gap-2'>
                    <input type="text" id="fname" name="fname" placeholder="Name" className='border-2 border-gray-500 rounded w-1/2' />
                    <input type="text" id="num" name="num" placeholder="Phone Number" className='border-2 border-gray-500 rounded w-1/2' />
                </div>
                <input type="text" id="email" name="email" placeholder="Email Address" className='border-2 border-gray-500 rounded' />
                <input type="text" id="mess" name="mess" placeholder="Message" className='border-2 border-gray-500 rounded h-16' />
            </form>
            <div className=' flex justify-end '>
                <button type="button" className={buttonStyle2}>Submit</button>
            </div>
        </div>
    )
}

export default Form