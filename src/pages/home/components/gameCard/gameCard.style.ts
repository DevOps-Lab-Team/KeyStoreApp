import styled from "styled-components";

import { theme } from "@/shared/theme";

const CardWrapper = styled.div`
  position: relative;
  //width: 280px;
  height: 160px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s;
  border-radius: 8px;

  &:hover {
    transform: scale(1.05);
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const GameImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;

  ${CardWrapper}:hover & {
    //transform: scale(1.05);
  }
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  padding: 16px;
  transform: translateY(100%);
  transition: transform 0.3s ease;

  ${CardWrapper}:hover & {
    transform: translateY(0);
  }
`;

const GameTitle = styled.h3`
  color: ${theme.palette.gray[100]};
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PriceWrapper = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(0, 0, 0, 0.5);
  padding: 6px 12px;
  border-radius: 4px;
`;

const Price = styled.span`
  color: ${theme.palette.gray[100]};
  font-size: 16px;
  font-weight: 600;
`;

const DiscountBadge = styled.span`
  color: ${theme.palette.red[500]};
  font-size: 14px;
  font-weight: 600;
`;

export default {
  CardWrapper,
  ImageWrapper,
  GameImage,
  Overlay,
  GameTitle,
  PriceWrapper,
  Price,
  DiscountBadge
};
