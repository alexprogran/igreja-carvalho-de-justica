"use client";
import DailyDevotion from "@/components/sections/DailyDevotion/DailyDevotion";
import QuickLinks from "@/components/sections/QuickLinks/QuickLinks";
import BootmNav from "@/components/layout/BootmNav";
import { useVideoOverlay } from "@/components/layout/VideoOverlayContext";
import Map from "@/components/sections/Map/Map";
import styles from "./page.module.css";

export default function Home() {
  const { videoOverlay } = useVideoOverlay();
  return (
    <div className={styles.page}>
      <DailyDevotion />
      <div className={styles.content}>
        {/* <HeaderSection /> */}
        <QuickLinks />
        <Map />
      </div>
      {!videoOverlay && <BootmNav />}
    </div>
  );
}