import React from "react";

export const UserIconBold: React.FC<{ size?: number; color?: string }> = ({
  size = 20,
  color = "black",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    style={{ marginRight: 8 }}
  >
    {/* Glava */}
    <circle cx="12" cy="8" r="4" />
    {/* Telo */}
    <path d="M5 20c0-3 4-5 7-5s7 2 7 5" />
  </svg>
);

