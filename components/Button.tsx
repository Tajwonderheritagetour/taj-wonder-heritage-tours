"use client";

import Link from "next/link";
import React from "react";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  target?: string;
  onClick?: () => void;
}

export default function Button({
  href,
  children,
  variant = "primary",
  target,
  onClick,
}: ButtonProps) {
  const styles: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "16px 34px",
    borderRadius: "50px",
    fontWeight: 700,
    fontSize: "16px",
    textDecoration: "none",
    transition: "all .3s ease",
    cursor: "pointer",
    border: "none",
  };

  const primary: React.CSSProperties = {
    background: "#d4af37",
    color: "#08142d",
    boxShadow: "0 10px 25px rgba(212,175,55,.35)",
  };

  const secondary: React.CSSProperties = {
    background: "transparent",
    color: "#ffffff",
    border: "2px solid #ffffff",
  };

  const buttonStyle = {
    ...styles,
    ...(variant === "primary" ? primary : secondary),
  };

  if (href) {
    const isExternal = href.startsWith("http");

    if (isExternal) {
      return (
        <a
          href={href}
          target={target ?? "_blank"}
          rel="noopener noreferrer"
          style={buttonStyle}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} style={buttonStyle}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} style={buttonStyle}>
      {children}
    </button>
  );
}