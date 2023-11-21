const Livechat = ({name,message}) => {
  return (
    <>
      <div className=" p-1 flex m-1 rounded-2xl bg-gray-100 ">
        <img
          className=" h-10 rounded-full  cursor-pointer"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppkoKsaYMuIoNLDH7O8ePOacLPG1mKXtEng&usqp=CAU"
          alt=" User"
        />
        <div className=" pl-5 ">
          <h1 className=" font-semibold">{name}</h1>
          <h1  className=' text-black'
          >
          {message}
          </h1>
        </div>
      </div>
    </>
  );
};

export default Livechat;
