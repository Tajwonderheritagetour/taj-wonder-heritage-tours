"use client";

import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      style={{
        background: "#f8f9fb",
        borderBottom: "1px solid #eee",
        padding: "14px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          fontSize: "15px",
          color: "#666",
        }}
      >
        {items.map((item, index) => (
          <span key={index}>
            {item.href ? (
              <Link
                href={item.href}
                style={{
                  color: "#08142d",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                {item.label}
              </Link>
            ) : (
              <span
                style={{
                  color: "#d4af37",
                  fontWeight: 700,
                }}
              >
                {item.label}
              </span>
            )}

            {index < items.length - 1 && (
              <span style={{ margin: "0 10px", color: "#999" }}>
                /
              </span>
            )}
          </span>
        ))}
      </div>
    </nav>
  );
}