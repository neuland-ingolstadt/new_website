'use client';

import Link from "next/link";

const pages = [
  { name: "Home", link: "/" },
  { name: "Test", link: "/test_page" },
]

function Tabs() {
  return (
    <div>
      {pages.map((page, index) => (
        <Link key={index} href={page.link}>{page.name}</Link>
      ))}
    </div>
  );
}

export default Tabs;
