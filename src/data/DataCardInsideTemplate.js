import { BsBoxSeam, BsType, BsCheckLg } from "react-icons/bs";
import { TbPaint } from "react-icons/tb";
let style = "text-4xl border border-blue-800 p-2 rounded-full text-[#1D40B0]";
const boxIcon = <BsBoxSeam className={style} />;
const typeIcon = <BsType className={style} />;
const paintIcon = <TbPaint className={style} />;
const checkIcon = (
  <BsCheckLg className=" text-4xl text-white rounded-full bg-[#1D40B0] p-2" />
);

export const dataCardInsideTemplate = [
  {
    icon: boxIcon,
    step: "Step 1:",
    title: "Download",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagitis, quam nec venenatis lobortis, misirus tempus nulla, sed portittior est nibh at nulla. Praesent placerat enim ut ex tincidunt vehicula.",
  },
  {
    icon: typeIcon,
    step: "Step 2:",
    title: "Add content",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagitis, quam nec venenatis lobortis, misirus tempus nulla, sed portittior est nibh at nulla.",
  },
  {
    icon: paintIcon,
    step: "Step 3:",
    title: "Customize styles",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagitis, quam nec venenatis lobortis, misirus tempus nulla, sed portittior est nibh at nulla. Praesent placerat enim ut ex tincidunt vehicula. Fusce sit amet dui tellus.",
  },
  { icon: checkIcon, step: "Ready!" },
];
