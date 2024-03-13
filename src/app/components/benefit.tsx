import Image from "next/image";
import React from "react";

interface Benefit {
  benefit: string;
}

const Benefit: React.FC<Benefit> = ({ benefit }) => {
  return (
    <li>
      <Image src="/ui/check.svg" alt="check mark" width={20} height={20} />
      <p className="inline">{benefit}</p>
    </li>
  );
};

export default Benefit;
