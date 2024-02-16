import React from "react";
import Image from "next/image";
import profileImage from "../../../../public/assets/profile_five.jpg";
import Link from "next/link";

const SenderDetails = () => {
  return (
    <div className="hidden lg:flex flex-col items-center w-[33%] gap-5 py-10 px-5 rounded-lg lg:pb-10 bg-darkHeader h-fit">
      <div className="flex justify-center items-center rounded-full w-20 h-20">
        <Image
          src={profileImage}
          width={200}
          height={200}
          alt=""
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-2 items-center">
        <h4 className="text-2xl font-bold">Charlotte Matendo</h4>
        <div className="flex flex-col">
          <p>Business | Entrepre</p>
        </div>
        <Link
          href={`/users/`}
          className="bg-dark flex items-center justify-center py-2 px-5 rounded-lg mt-4"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default SenderDetails;
