import React from 'react';

const Introduction = (props) => {
  return (
    <section className="h-screen">
      <div className="flex flex-wrap justify-around shadow-xl rounded-md bg-gray-100">
    
        <div className="object-center flex justify-center align-center no-wrap flex-col">
          <h1 className="font-custom text-4xl xs:text-5xl sm:text-7xl lg:text-8xl xl:text-9xl text-center bg-clip-text text-transparent bg-gradient-to-b from-pink-600 to-indigo-700 font-black py-4 px-4">Adam Honore</h1>
          <h2 className="font-custom text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-center bg-clip-text text-transparent bg-gradient-to-b from-pink-600 to-indigo-700 font-black py-4 px-4 ">Full Stack Software Developer</h2>
        </div>

        <div className="box-content bg-gradient-to-b from-pink-600 to-indigo-700 rounded-full m-4"> 
          <img src="https://res.cloudinary.com/ahonore42/image/upload/v1587911075/adam1_x3rxny.jpg" alt="Adam"
            className="w-64 inline-block align-middle rounded-full m-1"
          />
        </div>

      </div>
    </section>
  );
}

export default Introduction;