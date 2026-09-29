import sharp from "sharp";
import fs from "fs";
import path from "path";

const images = [
  "public/images/hero/guest-restaurant.jpg",
  "public/images/hero/hawa-mahal.jpg",
];

for (const input of images) {
  const output = input.replace(/\.(jpg|jpeg)$/i, ".webp");

  await sharp(input)
    .webp({ quality: 80 })
    .toFile(output);

  const originalSize = fs.statSync(input).size;
  const newSize = fs.statSync(output).size;

  console.log(`\n${input}`);
  console.log(`Original: ${(originalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`WebP:     ${(newSize / 1024 / 1024).toFixed(2)} MB`);
}

console.log("\n✅ Image optimization completed.");