import React from "react";

type Props = {
  text: string;
};

const Heading: React.FC<Props> = ({ text }) => {
  return (
    <h1 className="text-white font-mono text-center text-3xl font-bold mb-10">
      {text}
    </h1>
  );
};

export default Heading;
