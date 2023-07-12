import { LinkProps } from "@/utils/types/component.type";
import Link from "next/link";
import React from "react";
import styled from "@emotion/styled";

const LinkCustom = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;

function TextButton({ href, children }: LinkProps) {
  return <LinkCustom href={href}>{children}</LinkCustom>;
}

export default TextButton;
