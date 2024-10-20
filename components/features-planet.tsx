"use client";
import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import PhoneSVG from "@/public/images/phone.svg";
import Img1 from "@/public/images/1.jpg";
import Img2 from "@/public/images/2.jpg";
import Img3 from "@/public/images/3.jpg";
import Img4 from "@/public/images/4.jpg";
import Img5 from "@/public/images/5.jpg";
import Img6 from "@/public/images/6.jpg";


type FeatureKey = 'namaz' | 'dua' | 'kible' | 'zikir' | 'sunnet' | 'hedef';


interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, isActive, onClick }) => (
  <article 
    onClick={onClick} 
    className={`border border-yellow-500 rounded-3xl cursor-pointer transition-all duration-300 ${isActive ? 'bg-yellow-500 bg-opacity-50 rounded-3xl' : ''}`}
  >
    <h3
    className={`mb-2 flex items-center space-x-2 font-medium ${isActive ? 'text-[#fff]' : 'text-[#fff]'}`}>
      {/* Icon in any color */}
      {icon}
      <span>{title}</span>
    </h3>
    <p className={`text-[15px] ${isActive ? 'text-[#fff]' : 'text-[#fff]'}`}>
      {description}
    </p>
  </article>
);

export default function FeaturesPlanet() {
  const [activeFeature, setActiveFeature] = useState<FeatureKey | null>(null);

  const handleFeatureClick = (feature: FeatureKey) => {
    setActiveFeature(feature);
  };

  const renderPhoneContent = () => {
    switch (activeFeature) {
      case 'namaz':
        return <div className="absolute inset-0 flex items-center justify-center text-black">
          <Image src={Img2} alt="Kiblegah Logo" className='rounded-3xl' width={305} height={100} />
          </div>;
      case 'dua':
        return <div className="absolute inset-0 flex items-center justify-center text-black">
          <Image src={Img3} alt="Kiblegah Logo" className='rounded-3xl' width={305} height={100} />
        </div>;
      case 'kible':
        return <div className="absolute inset-0 flex items-center justify-center text-black">
          <Image src={Img4} alt="Kiblegah Logo" className='rounded-3xl' width={305} height={100} />
        </div>;
      case 'zikir':
        return <div className="absolute inset-0 flex items-center justify-center text-black">
          <Image src={Img5} alt="Kiblegah Logo" className='rounded-3xl' width={305} height={100} />
        </div>;
      case 'sunnet':
        return <div className="absolute inset-0 flex items-center justify-center text-black">
          <Image src={Img6} alt="Kiblegah Logo" className='rounded-3xl' width={305} height={100} />
        </div>;
      case 'hedef':
        return <div className="absolute inset-0 flex items-center justify-center text-black">
          <Image src={Img6} alt="Kiblegah Logo" className='rounded-3xl' width={305} height={100} />
        </div>;
      default:
        return <div className="absolute inset-0 flex items-center justify-center text-black">
          <Link href="/">
            <Image src={Img1} alt="Kiblegah Logo" className='rounded-3xl' width={305} height={100} /> 
          </Link>
        </div>;
    }
  };

  const features: { key: FeatureKey; icon: JSX.Element; title: string; description: string }[] = [
    {
      key: 'namaz',
      icon: (
        <svg className="fill-[#FF9900]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width={16} height={16}>
          <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/>
        </svg>
      ),
      title: 'Namaz Vakitleri',
      description: 'Günlük namaz vakitlerini takip edin ve hatırlatmalar alın.'
    },
    {
      key: 'dua',
      icon: (
        <svg className="fill-[#FF9900]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width={16} height={16}>
          <path d="M351.2 4.8c3.2-2 6.6-3.3 10-4.1c4.7-1 9.6-.9 14.1 .1c7.7 1.8 14.8 6.5 19.4 13.6L514.6 194.2c8.8 13.1 13.4 28.6 13.4 44.4l0 73.5c0 6.9 4.4 13 10.9 15.2l79.2 26.4C631.2 358 640 370.2 640 384l0 96c0 9.9-4.6 19.3-12.5 25.4s-18.1 8.1-27.7 5.5L431 465.9c-56-14.9-95-65.7-95-123.7L336 224c0-17.7 14.3-32 32-32s32 14.3 32 32l0 80c0 8.8 7.2 16 16 16s16-7.2 16-16l0-84.9c0-7-1.8-13.8-5.3-19.8L340.3 48.1c-1.7-3-2.9-6.1-3.6-9.3c-1-4.7-1-9.6 .1-14.1c1.9-8 6.8-15.2 14.3-19.9zm-62.4 0c7.5 4.6 12.4 11.9 14.3 19.9c1.1 4.6 1.2 9.4 .1 14.1c-.7 3.2-1.9 6.3-3.6 9.3L213.3 199.3c-3.5 6-5.3 12.9-5.3 19.8l0 84.9c0 8.8 7.2 16 16 16s16-7.2 16-16l0-80c0-17.7 14.3-32 32-32s32 14.3 32 32l0 118.2c0 58-39 108.7-95 123.7l-168.7 45c-9.6 2.6-19.9 .5-27.7-5.5S0 490 0 480l0-96c0-13.8 8.8-26 21.9-30.4l79.2-26.4c6.5-2.2 10.9-8.3 10.9-15.2l0-73.5c0-15.8 4.7-31.2 13.4-44.4L245.2 14.5c4.6-7.1 11.7-11.8 19.4-13.6c4.6-1.1 9.4-1.2 14.1-.1c3.5 .8 6.9 2.1 10 4.1z"/>
        </svg>
      ),
      title: 'Kuran ve Sünnetten Dualar',
      description: 'Günlük hayatta kullanabileceğiniz duaları öğrenin ve uygulayın.'
    },
    {
      key: 'kible',
      icon: (
        <svg className="fill-[#FF9900]" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 576 512">
          <path d="M60 120l228 71.2L516 120 288 48.8 60 120zM278.5 1.5c6.2-1.9 12.9-1.9 19.1 0l256 80C566.9 85.6 576 98 576 112l0 16s0 0 0 0l0 21.2L292.8 237.7c-3.1 1-6.4 1-9.5 0L0 149.2 0 128l0-16C0 98 9.1 85.6 22.5 81.5l256-80zm23.9 266.8L576 182.8l0 46.5-52.8 16.5c-8.4 2.6-13.1 11.6-10.5 20s11.6 13.1 20 10.5L576 262.8 576 400c0 14-9.1 26.4-22.5 30.5l-256 80c-6.2 1.9-12.9 1.9-19.1 0l-256-80C9.1 426.4 0 414 0 400L0 262.8l43.2 13.5c8.4 2.6 17.4-2.1 20-10.5s-2.1-17.4-10.5-20L0 229.2l0-46.5 273.7 85.5c9.3 2.9 19.3 2.9 28.6 0zm-185.5-2.6c-8.4-2.6-17.4 2.1-20 10.5s2.1 17.4 10.5 20l64 20c8.4 2.6 17.4-2.1 20-10.5s-2.1-17.4-10.5-20l-64-20zm352 30.5c8.4-2.6 13.1-11.6 10.5-20s-11.6-13.1-20-10.5l-64 20c-8.4 2.6-13.1 11.6-10.5 20s11.6 13.1 20 10.5l64-20zm-224 9.5c-8.4-2.6-17.4 2.1-20 10.5s2.1 17.4 10.5 20l38.5 12c9.3 2.9 19.3 2.9 28.6 0l38.5-12c8.4-2.6 13.1-11.6 10.5-20s-11.6-13.1-20-10.5l-38.5 12c-3.1 1-6.4 1-9.5 0l-38.5-12z"/>
        </svg>
      ),
      title: 'Kıble Pusulası',
      description: 'Nerede olursanız olun, doğru kıble yönünü bulun.'
    },
    {
      key: 'zikir',
      icon: (
        <svg className="fill-[#FF9900]" xmlns="http://www.w3.org/2000/svg" width={16} height={16}>
          <path d="M10.284.33a1 1 0 1 0-.574 1.917 6.049 6.049 0 0 1 2.417 1.395A1 1 0 0 0 13.5 2.188 8.034 8.034 0 0 0 10.284.33ZM6.288 2.248A1 1 0 0 0 5.718.33 8.036 8.036 0 0 0 2.5 2.187a1 1 0 0 0 1.372 1.455 6.036 6.036 0 0 1 2.415-1.395ZM1.42 5.401a1 1 0 0 1 .742 1.204 6.025 6.025 0 0 0 0 2.79 1 1 0 0 1-1.946.462 8.026 8.026 0 0 1 0-3.714A1 1 0 0 1 1.421 5.4Zm2.452 6.957A1 1 0 0 0 2.5 13.812a8.036 8.036 0 0 0 3.216 1.857 1 1 0 0 0 .574-1.916 6.044 6.044 0 0 1-2.417-1.395Zm9.668.04a1 1 0 0 1-.041 1.414 8.033 8.033 0 0 1-3.217 1.857 1 1 0 1 1-.571-1.917 6.035 6.035 0 0 0 2.415-1.395 1 1 0 0 1 1.414.042Zm2.242-6.255a1 1 0 1 0-1.946.462 6.03 6.03 0 0 1 0 2.79 1 1 0 1 0 1.946.462 8.022 8.022 0 0 0 0-3.714Z" />
        </svg>
      ),
      title: 'Zikirler',
      description: 'Günlük zikir rutininizi oluşturun ve takip edin.'
    },
    {
      key: 'sunnet',
      icon: (
        <svg className="fill-[#FF9900]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={16} height={16}>
          <path d="M352 64A64 64 0 1 0 224 64a64 64 0 1 0 128 0zM232.7 264l22.9 31.5c6.5 8.9 16.3 14.7 27.2 16.1s21.9-1.7 30.4-8.7l88-72c17.1-14 19.6-39.2 5.6-56.3s-39.2-19.6-56.3-5.6l-55.2 45.2-26.2-36C253.6 156.7 228.6 144 202 144c-30.9 0-59.2 17.1-73.6 44.4L79.8 280.9c-20.2 38.5-9.4 85.9 25.6 111.8L158.6 432 72 432c-22.1 0-40 17.9-40 40s17.9 40 40 40l208 0c17.3 0 32.6-11.1 38-27.5s-.3-34.4-14.2-44.7L187.7 354l45-90z"/>     
        </svg>
      ),
      title: 'Revatip Sünnetler',
      description: 'Peygamber Efendimizin sünnetlerini öğrenin ve uygulayın.'
    },
    {
      key: 'hedef',
      icon: (
        <svg className="fill-[#FF9900]" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 384 512">
          <path d="M192 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm51.3 182.7L224.2 307l49.7 49.7c9 9 14.1 21.2 14.1 33.9l0 89.4c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-82.7-73.9-73.9c-15.8-15.8-22.2-38.6-16.9-60.3l20.4-84c8.3-34.1 42.7-54.9 76.7-46.4c19 4.8 35.6 16.4 46.4 32.7L305.1 208l30.9 0 0-24c0-13.3 10.7-24 24-24s24 10.7 24 24l0 55.8c0 .1 0 .2 0 .2s0 .2 0 .2L384 488c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-216-39.4 0c-16 0-31-8-39.9-21.4l-13.3-20zM81.1 471.9L117.3 334c3 4.2 6.4 8.2 10.1 11.9l41.9 41.9L142.9 488.1c-4.5 17.1-22 27.3-39.1 22.8s-27.3-22-22.8-39.1zm55.5-346L101.4 266.5c-3 12.1-14.9 19.9-27.2 17.9l-47.9-8c-14-2.3-22.9-16.3-19.2-30L31.9 155c9.5-34.8 41.1-59 77.2-59l4.2 0c15.6 0 27.1 14.7 23.3 29.8z"/>
        </svg>
      ),
      title: 'Kişisel Hedefler',
      description: 'Manevi gelişiminiz için kişisel hedefler belirleyin ve takip edin.'
    },
  ];

  return (
    <section id="features-planet" className="relative before:absolute before:inset-0 before:-z-20 before:bg-[#000] py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 className="h-24 p-2 bg-gradient-to-r from-[#976700] via-[#C18E25] to-[#C18E25] bg-clip-text text-transparent text-3xl font-bold  md:text-5xl">
              Yeni Kıblegâh, Yeni Özellikler
            </h2>
          </div>
          
          {/* iPhone and Grid container */}
          <div className="flex flex-col items-center md:flex-row md:items-center md:space-x-8">
            {/* iPhone */}
            <div className="md:w-1/2 pb-16 md:pb-0" data-aos="zoom-y-out">
              <div className="text-center">
                <div className="relative inline-flex rounded-3xl before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-gradient-to-b before:from-yellow-600 before:to-yellow-800 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit] after:[background:radial-gradient(closest-side,theme(),transparent)]">
                  <div className="relative">
                    
                    <Image
                      src={PhoneSVG}
                      width={366}
                      height={729}
                      alt="iPhone"
                    />
                    {renderPhoneContent()}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Grid */}
            <div className="md:w-1/2 grid overflow-hidden sm:grid-cols-1 lg:grid-cols-1  gap-6 [&>*]:relative [&>*]:p-6 [&>*]:before:absolute [&>*]:before:[block-size:100%] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100%] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] md:[&>*]:p-6">
              {features.map((feature) => (
                <Feature
                  key={feature.key}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  isActive={activeFeature === feature.key}
                  onClick={() => handleFeatureClick(feature.key)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
