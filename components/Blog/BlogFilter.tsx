"use client";

import { useState } from "react";
import Link from "next/link";

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
  readTime: string;
}

export default function BlogFilter({
  posts,
}: {
  posts: BlogPost[];
}) {
  const [selectedCategory, setSelectedCategory] =
    useState("All Articles");

  const filteredPosts =
    selectedCategory === "All Articles"
      ? posts
      : posts.filter(
          (post) => post.category === selectedCategory
        );

  const categories = [
    "All Articles",
    "Travel Guide",
    "Golden Triangle",
    "Agra",
    "Jaipur",
    "Delhi",
    "Rajasthan",
    "Wildlife",
  ];

  return (
    <>
      {/* Categories */}

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto 50px",
          padding: "0 20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "15px",
            justifyContent: "center",
          }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                padding: "12px 24px",
                borderRadius: "30px",
                border: "1px solid #d4af37",
                background:
                  selectedCategory === category
                    ? "#d4af37"
                    : "#fff",
                color: "#08142d",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Cards */}

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(340px,1fr))",
            gap: "35px",
          }}
        >
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              style={{
                background: "#fff",
                borderRadius: "18px",
                overflow: "hidden",
                boxShadow:
                  "0 10px 30px rgba(0,0,0,.08)",
              }}
            >
              <img
                src={post.image}
                alt={post.title}
                style={{
                  width: "100%",
                  aspectRatio: "16/9",
                  objectFit: "cover",
                }}
              />

              <div
                style={{
                  padding: "28px",
                }}
              >
                <span
                  style={{
                    background: "#d4af37",
                    color: "#08142d",
                    padding: "6px 14px",
                    borderRadius: "20px",
                    fontWeight: 700,
                    fontSize: "13px",
                  }}
                >
                  {post.category}
                </span>

                <h3
                  style={{
                    marginTop: "18px",
                    fontSize: "28px",
                    color: "#08142d",
                  }}
                >
                  {post.title}
                </h3>

                <p
                  style={{
                    color: "#666",
                    lineHeight: "30px",
                    marginTop: "15px",
                  }}
                >
                  {post.description}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  style={{
                    display: "inline-block",
                    marginTop: "20px",
                    background: "#08142d",
                    color: "#fff",
                    padding: "14px 28px",
                    borderRadius: "40px",
                    textDecoration: "none",
                    fontWeight: 700,
                  }}
                >
                  Read Article →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}