import React from "react";

import styles from "./NewsBlogs.module.css";
import NewsCard from "./NewsCard/NewsCard";

const NewsBlogs = () => {
  return (
    <section className={styles.wrapper}>
      <h3 className={styles.subHeading}>Blog & News</h3>
      <h1 className={styles.heading}>Read Our Latest News </h1>
      <div className={styles.cards}>
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </section>
  );
};

export default NewsBlogs;
