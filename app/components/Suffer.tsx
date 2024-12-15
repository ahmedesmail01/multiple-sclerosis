import Image from "next/image";
import React from "react";
import girlImg from "@/public/images/girl.svg";
import arrow from "@/public/images/Frame 427322974.svg";

const Suffer = () => {
  const items = [
    "ستتعلم كيفية إدارة المشاعر المرتبطة بالتصلب اللويحي .",
    "ستدرك أن قيمتك لا تُستمد من الخارج بل من داخلك.",
    "ستبدأ رحلة التشافي تدريجيًا مع تراجع حدة المرض وعودة الغدة لنشاطها الطبيعي.",
  ];
  return (
    <div className="flex-col px-4   lg:flex-row md:flex  items-start lg:gap-6 justify-center lg:mb-[96px] mb-[60px] [font-family:--font-expo]">
      <Image
        src={girlImg}
        alt="image"
        width={612}
        height={986}
        className="w-[330px] mb-4 lg:w-[612px] lg:h-[840px] object-cover rounded-3xl"
      />
      <div
        dir="rtl"
        className="lg:w-[612px] w-[330px]  lg:h-[840px] bg-[#263653] lg:py-[48px] px-4 py-8 lg:px-[96px] text-white rounded-3xl"
      >
        <h1 className="self-stretch text-white text-right mb-4   text-2xl  lg:text-[32px] font-bold leading-[160%]">
          معاناة التصلب اللويحي:
        </h1>
        <p className="flex mb-4 flex-col justify-center flex-[1_0_0] self-stretch text-[#DADADA] text-right  text-base lg:text-lg font-medium leading-[160%]">
          التصلب اللويحي مرض مناعي ذاتي يؤثر على الجهاز العصبي المركزي، حيث
          يتضرر غشاء المايلين المحيط بالأعصاب، مما يعوق الإشارات العصبية ويتسبب
          في ضعف العضلات ونوبات متكررة قد تؤدي لاحقًا إلى إعاقة دائمة.
        </p>
        <p className="flex w-[453px] mb-4 flex-col justify-center self-stretch text-white text-right  text-lg font-medium leading-[160%]">
          معاناة مريض التصلب اللويحي:
        </p>
        <ul className="mb-4">
          <li className="flex flex-row gap-1  flex-[1_0_0] self-stretch text-white text-right text-base lg:text-lg font-medium leading-[160%]">
            <span className="text-red-500">1- </span>صعوبة أداء المهام اليومية
            والاعتماد على الآخرين
          </li>
          <li className="flex flex-row gap-1  flex-[1_0_0] self-stretch text-white text-right text-base lg:text-lg font-medium leading-[160%]">
            <span className="text-red-500">2- </span>ضعف التحكم في الجسد وفقدان
            الاستقلالية.
          </li>
          <li className="flex flex-row gap-1  flex-[1_0_0] self-stretch text-white text-right text-base lg:text-lg font-medium leading-[160%]">
            <span className="text-red-500">3- </span>تأثير نفسي عميق نتيجة
            الشعور بالعجز وعدم القدرة على التفاعل مع المحيط.
          </li>
        </ul>
        <p className="mb-4 flex w-[453px] flex-col justify-center self-stretch text-white text-right  text-lg font-medium leading-[160%]">
          معاناة مريض التصلب اللويحي:
        </p>
        <div className="flex flex-col gap-4 mb-4">
          {items.map((item, index) => {
            return (
              <div key={index} className="flex gap-4 items-center">
                <Image
                  src={arrow}
                  alt="icon"
                  className="w-[40px] lg:w-[60px]"
                />{" "}
                <p className="flex flex-col justify-center flex-[1_0_0] self-stretch text-white text-right text-base lg:text-lg font-medium leading-[160%]">
                  {item}
                </p>
              </div>
            );
          })}
        </div>
        <a
          href="https://staging.mtnhealingcenter.com/payment/899f77cb-1e48-4e29-89c0-6c0469515ea1"
          className="flex mb-4 text-white font-bold text-sm md:text-xl w-[130px] md:w-[195px] h-[50px] md:h-[60px] justify-center items-center gap-2 bg-gradient-to-r from-[#E24514] to-[#0F1010] shadow-md px-4 py-2 rounded-2xl"
        >
          اشترك الآن
        </a>
      </div>
    </div>
  );
};

export default Suffer;
