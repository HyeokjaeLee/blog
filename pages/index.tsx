// pages/index.tsx

import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Progress } from "reactstrap";
import { Page } from "../component/layout/Page";
export default function Home() {
  return (
    <Page title="Nagle">
      <div className={styles.title_container}>
        <div className={styles.main_title}>
          <div className={styles.test} />
          <span>
            Lazy Developer
            <br />
            이혁재입니다.
          </span>
        </div>
        <div className={styles.sub_title}>
          <Progress
            multi
            style={{ width: "50%", height: "33%", borderRadius: "100px" }}
          >
            <Progress
              bar
              animated
              value="70"
              style={{ backgroundColor: "#343148" }}
            ></Progress>
          </Progress>
        </div>
      </div>
    </Page>
  );
}

{
  /*      <div className={styles.title_container}>
        <div className={styles.main_title}>
          <h1>
            Lazy Developer
            <br />
            이혁재 입니다.
          </h1>
          heroku 서버를 켜는 중입니다.
        </div>
        <div className={styles.sub_title}>
         
        </div>
      </div>*/
}
