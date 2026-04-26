import DailyDevotion from "@/components/DailyDevotion";
import LiveServiceCard from "@/components/LiveServiceCard";
import QuickLinks from "@/components/QuickLinks";
import ChurchMeeting from "@/components/ChurchMeeting";
import OngoingEvent from "@/components/OngoingEvent";
import BottomNav from "@/components/BottomNav";
import Map from "@/components/Map";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
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