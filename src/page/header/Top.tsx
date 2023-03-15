
function Top() {
  return (
    <div className='flex justify-between text-white text-xs p-5 items-center sm:py-3 sm:px-40'>
      <div className='flex items-center gap-1'>
        <svg xmlns="http://www.w3.org/2000/svg" height="0.75rem" viewBox="0 0 24 24" width="0.75rem" fill="#d9a520"><path d="M0 0h24v24H0z" fill="none" /><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
        <a href="mailto:youremail@gmail.com" className='font-poppins text-yellow-500 text-xs'>youremail@gmail.com</a>
      </div>
      <div className='flex gap-1'>
        <svg xmlns="http://www.w3.org/2000/svg" height="0.75rem" viewBox="0 0 24 24" width="0.75rem" fill="#d9a520"><path d="M0 0h24v24H0z" fill="none" /><path d="M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z" /></svg>
        <a href="tel:+046123467" className='font-poppins text-yellow-500 text-xs'> (046) 123 - 4567</a>
      </div>
    </div>
  );
}

export default Top