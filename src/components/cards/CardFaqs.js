import React from "react";
import { TbBrandTailwind } from "react-icons/tb";
import { IoIosRocket } from "react-icons/io";
import { IoTextOutline } from "react-icons/io5";
import { GiPaintRoller } from "react-icons/gi";
import {
  BsArrowLeftRight,
  BsXDiamondFill,
  BsBoxSeam,
  BsArrowDownRight,
} from "react-icons/bs";
import { HiOutlineLightBulb } from "react-icons/hi";
import { VscChecklist, VscCheck } from "react-icons/vsc";
import { TbArrowDownRight } from "react-icons/tb";

export default function CardFaqs({
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
    TbArrowDownRight: <TbArrowDownRight />,
    BsArrowDownRight: <BsArrowDownRight />,
  };
  return (
    <div className="flex py-4">
      {icons[iconName] &&
        React.cloneElement(icons[iconName], {
          className: `${bgColorIcon} text-xl text-blue-900 `,
        })}
      <div>
        <p className="font-black pl-3">{title}</p>
        <p className="max-w-sm pl-3">{description}</p>
      </div>
    </div>
  );
}
