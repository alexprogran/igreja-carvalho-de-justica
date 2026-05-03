import DailyDevotion from "@/components/sections/DailyDevotion/DailyDevotion";
import QuickLinks from "@/components/sections/QuickLinks/QuickLinks";
import BottomNav from "@/components/layout/BottomNav";
import Map from "@/components/sections/Map/Map";
import VideoApresent from "@/components/sections/VideoPresentation/VideoApresent";
import styles from "./page.module.css";

export default function Home() {
  const videoApresentData = {
    intro: "",
    tema: "Igreja Carvalho de Justiça",
    data_exib: "Este vídeo mudará a sua vida para sempre.",
    video: "/video.mp4",
    capa: "/assets/devotion-bg.jpg",
  };
 
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        {/* <VideoApresent {...videoApresentData} /> */}
        <DailyDevotion />        
        <QuickLinks />     
        <Map />       
      </div>
      <BottomNav />
    </div>
  );
}