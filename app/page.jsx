import DailyDevotion from "@/components/DailyDevotion";
import LiveServiceCard from "@/components/LiveServiceCard";
import QuickLinks from "@/components/QuickLinks";
import BottomNav from "@/components/BottomNav";
import Map from "@/components/Map";
import VideoApresent from "@/components/VideoApresent";
import styles from "./page.module.css";

export default function Home() {
  const videoApresentData = {
    intro: "",
    tema: "Bem vindo à Carvalho de Justiça",
    data_exib: "Este vídeo mudará a sua vida para sempre.",
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