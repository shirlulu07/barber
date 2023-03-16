function Beard() {
  const buttonStyle2 ="text-white text-sm bg-yellow-400 border-2 border-yellow-400 w-64 h-10 rounded-3xl my-1 hover:bg-yellow-400";
  return (
    <div
      className="bg-black bg-no-repeat text-center px-5 py-20 flex flex-col gap-2 items-center sm:bg-cover bg-bg-3">
      <h1 className='headStyle'>GET FLAT 25% DISCOUNT!</h1>
      <p className="textStyle text-white">
        Get Flat 25% Discount on every sunday of December. Use the promo code
        below.
      </p>
      <h2 className="text-xl font-crimson text-white sm:text-4xl">
        #BARBEARDS
      </h2>
      <button type="button" className={buttonStyle2}>
        MAKE AN APPOINTMENT NOW
      </button>
    </div>
  );
}

export default Beard;
