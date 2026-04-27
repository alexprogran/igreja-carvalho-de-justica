import DailyDevotion from "@/components/DailyDevotion";
import LiveServiceCard from "@/components/LiveServiceCard";
import QuickLinks from "@/components/QuickLinks";
import BottomNav from "@/components/BottomNav";
import Map from "@/components/Map";
import VideoApresent from "@/components/VideoApresent";
import styles from "./page.module.css";

export default function Home() {
  const videoApresentData = {
    tema: "Boas-vindas da Comunidade",
    data_exib: "27 de abril de 2026",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    capa: "/assets/devotion-bg.jpg",
  };

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <VideoApresent {...videoApresentData} />
        <DailyDevotion />
        <LiveServiceCard />
        <QuickLinks />
        <Map />
        {/* <ChurchMeeting /> */}
        {/* <OngoingEvent /> */}
      </div>
      <BottomNav />
    </div>
  );
}