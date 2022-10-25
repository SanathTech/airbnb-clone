import Image from "next/image";
import React from "react";
import { useRouter } from "next/dist/client/router";

function Banner() {
  const router = useRouter();
  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: "London",
        startDate: new Date().toISOString(),
        endDate: new Date().toISOString(),
        noOfGuests: 1,
      },
    });
  };

  return (
    <div className="relative h-[50vw] max-h-[70vh]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
        objectPosition="50% bottom"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
        <button
          onClick={search}
          className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150"
        >
          I&apos;m flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
