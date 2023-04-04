import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import BlogPost from "@/components/blopPosts.js/blogPost";
import Heading from "@/components/heading/heading";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
       <Heading/>
      <BlogPost />
    </>
  );
}
