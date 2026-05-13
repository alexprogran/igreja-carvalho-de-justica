import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import styles from "./Cadastro.module.css";

export default function Cadastro() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.card}>
        <Link href="/login" className={styles.backButton} aria-label="Voltar para login">
          <IoArrowBack size={22} aria-hidden="true" />
        </Link>

        <div className={styles.logoWrap}>
          <Image
            src="/logo2.png"
            alt="Cignifi"
            width={140}
            height={48}
            className={styles.logo}
            priority
          />
        </div>

        <h1 className={styles.title}>Create your Account</h1>

        <form className={styles.form}>
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="email"
          />
          <input
            className={styles.input}
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="new-password"
          />
          <input
            className={styles.input}
            type="password"
            name="confirm-password"
            placeholder="Confirm Password"
            autoComplete="new-password"
          />

          <button type="submit" className={styles.primaryButton}>
            Sign up
          </button>
        </form>

        <p className={styles.socialTitle}>- Or sign up with -</p>

        <div className={styles.socialGrid}>
          <button type="button" className={styles.socialButton} aria-label="Google">
            <FcGoogle size={24} aria-hidden="true" />
          </button>
          <button type="button" className={styles.socialButton} aria-label="Facebook">
            <FaFacebookF size={22} aria-hidden="true" />
          </button>
          <button type="button" className={styles.socialButton} aria-label="Twitter">
            <FaTwitter size={22} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}