import React from "react";
import { TbBrandTailwind } from "react-icons/tb";
import { IoIosRocket } from "react-icons/io";
import { IoTextOutline } from "react-icons/io5";
import { GiPaintRoller } from "react-icons/gi";
import { BsArrowLeftRight, BsXDiamondFill, BsBoxSeam } from "react-icons/bs";
import { HiOutlineLightBulb } from "react-icons/hi";
import { VscChecklist, VscCheck } from "react-icons/vsc";

export default function CardSectionFeature({
  title,
  description,
  bgColorIcon,
  iconName,
}) {
  const icons = {
    TbBrandTailwind: <TbBrandTailwind />,
    IoIosRocket: <IoIosRocket />,
    BsArrowLeftRight: <BsArrowLeftRight />,
    HiOutlineLightBulb: <HiOutlineLightBulb />,
    BsXDiamondFill: <BsXDiamondFill />,
    VscChecklist: <VscChecklist />,
    VscCheck: <VscCheck />,
    BsBoxSeam: <BsBoxSeam />,
    IoTextOutline: <IoTextOutline />,
    GiPaintRoller: <GiPaintRoller />,
  };
  return (
    <div className="flex py-4">
      {icons[iconName] &&
        React.cloneElement(icons[iconName], {
          className: `${bgColorIcon} text-3xl text-white `,
        })}
      <div>
        <p className="font-black pl-3">{title}</p>
        <p className="max-w-sm pl-3">{description}</p>
      </div>
    </div>
  );
}
