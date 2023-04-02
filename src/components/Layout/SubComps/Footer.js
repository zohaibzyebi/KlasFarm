import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full px-2 xs:px-3 sm:px-4 md:px-5 lg:px-6 py-6 max-w-[1440px] flex flex-col items-center justify-start bg-davyGrey">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[0.8fr_0.8fr_1.2fr_1.2fr_1.1fr_0.1fr] gap-6 sm:gap-4 items-center">
        {/* Logo  */}
        <div className="w-[220px] xl:w-[250px] h-[120px] xl:h-[137px] ml-[-24px] lg:ml-[-16px] flex items-center justify-center relative">
          <Image
            src="/images/logo-alt.svg"
            alt=""
            fill
            className="object-cotain"
          />
        </div>
        <div className="text-[26px] xl:text-[30px] font-bold text-white ">
          KONTAKTY
        </div>
        {/* Contact for agricultral purchases  */}
        <div className="flex flex-col items-start justify-center gap-1">
          <div className="w-full xs:max-w-[50%] sm:max-w-none text-white text-[15px] xl:text-base font-semibold">
            Predaj, nákup agrokomodít, služby pozberovej linky
          </div>
          <div className="text-white text-[16px] xl:text-[18px]">
            Ing. Peter Pastorok
          </div>
          <div className="text-white text-[16px] xl:text-[18px]">
            mobil: +421 915 213 708
          </div>
          <div className="text-white text-[16px] xl:text-[18px]">
            e-mail: pastorok@klasfarm.sk
          </div>
        </div>
        {/* Contact details  */}
        <div className="flex flex-col items-start justify-center gap-1">
          <div className="text-white text-[15px] xl:text-base font-semibold">
            Predaj živočíšnej výroby
          </div>
          <div className="text-white text-[16px] xl:text-[18px]">
            Ing. Peter Slovák
          </div>
          <div className="text-white text-[16px] xl:text-[18px]">
            mobil: +421 904 437 755
          </div>
          <div className="text-white text-[16px] xl:text-[18px]">
            e-mail: slovak@klasfarm.sk
          </div>
        </div>
        {/* email contact  */}
        <div className="text-white text-[16px] xl:text-[18px]">
          e-mail: info@klasfarm.sk
        </div>
        {/* Socials  */}
        <div className="flex flex-col items-start sm:items-end justify-center gap-[5px]">
          {/* => Facebook */}
          <Link href="/">
            <div className="w-[35px] xl:w-[40px] h-[35px] xl:h-[40px] relative flex items-center justify-center">
              <Image
                src="/icons/social/fb-white.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </Link>
          {/* Instagram */}
          <Link href="/">
            <div className="w-[35px] xl:w-[40px] h-[35px] xl:h-[40px] relative flex items-center justify-center">
              <Image
                src="/icons/social/ig-white.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </Link>
          {/* Youtube  */}
          <Link href="/">
            <div className="w-[35px] xl:w-[40px] h-[35px] xl:h-[40px] relative flex items-center justify-center">
              <Image
                src="/icons/social/ytb-white.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
