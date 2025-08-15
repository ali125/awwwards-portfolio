import React, { useRef } from "react";

type Props = {
  items: string[];
};

const Marquee: React.FC<Props> = ({ items }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  return <div ref={containerRef}>Marquee</div>;
};

export default Marquee;
