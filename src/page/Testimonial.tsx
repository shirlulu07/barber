function Testimonial() {
    const headStyle = "text-yellow-400 text-2xl font-crimson sm:text-5xl"
    return (
        <div className='bg-no-repeat bg-left-top sm:bg-cover sm:bg-left-top px-10 py-20 sm:px-40 bg-black bg-bg-2' id="testimonials">
            <h3 className='headStyle1'>100+ HAPPY CLIENTS</h3>
            <h1 className='headStyle text-2xl'>TESTIMONIALS</h1>
            <div className='py-5 flex flex-col gap-3 sm:w-1/2'>
                <p className='textStyle text-white '>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate"</p>
                <p className='textStyle text-white '><strong><i>John Doe, CEO Microsoft</i></strong></p>
                <p className='textStyle text-white '>July 27, 2018</p>
            </div>
            <div className='flex'>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#d9a520"><path d="M24 24H0V0h24v24z" fill="none" /><circle cx="12" cy="12" r="8" /></svg>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#d9a520"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6m0-2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8z" /></svg></div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#d9a520"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6m0-2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8z" /></svg>
                </div>
            </div>
        </div>
    );
}

export default Testimonial