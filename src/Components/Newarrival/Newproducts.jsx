function NewProducts({ title, brand, rs, image }) {
  return (
    <div className=" mx-1 justify-between rounded bg-[#EEEEEE] border-solid border-2 border-black-100 mb-8">
      <div className="h-[210px] w-[148px] sm:h-[250px] sm:w-[184px] md:h-[400px] md:w-[250px]  ">
        <img
          src={image}
          className=" sm:h-[208px] sm:w-[184px] h-[170px] w-[148px] md:h-[372px] md:w-[250px]"
          alt=""
        />
        <div className="align-middle justify-center flex text-lg">{rs}</div>
      </div>
    </div>
  );
}

export default NewProducts;
