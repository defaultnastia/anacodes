import React from "react";

type Props = {
  image: string;
};

const MobileDemo = ({ image }: Props) => {
  return <p> mobile {image}</p>;
};

export default MobileDemo;
