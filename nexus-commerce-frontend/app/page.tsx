"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("正在连接后端...");

  useEffect(() => {
    fetch("http://localhost:8080/hello")
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => {
        console.error(err);
        setMessage("连接失败，请检查后端是否启动。");
      });
  }, []);

  return (
    <main>
      <h1>Nexus Commerce</h1>
      <p>{message}</p>
    </main>
  );
}