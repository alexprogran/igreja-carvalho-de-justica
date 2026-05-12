import styles from "./CommentsSheet.module.css";

const comments = [
  {
    id: 1,
    name: "Giggles Squrl",
    time: "at 1:53 · 4h",
    text: "What a great track! Its got house, dubstep, breakbeats! You could use this in a mix to switch genres!",
  },
  {
    id: 2,
    name: "MC McDrill",
    time: "at 2:27 · 4h",
    text: "holy fuck",
  },
  {
    id: 3,
    name: "RiXTiiC",
    time: "at 0:14 · 3h",
    text: "Check out my remix to this song!- Just posted on my page!",
  },
];

export default function CommetsSheet() {
  return (
    <section className={styles.overlay} aria-label="Comments Bottom Sheet">
      <div className={styles.sheet}>
        <span className={styles.handle} aria-hidden="true" />

        <div className={styles.content}>
          {comments.map((comment) => (
            <article className={styles.commentRow} key={comment.id}>
              <span className={styles.avatar} aria-hidden="true" />

              <div className={styles.commentBody}>
                <p className={styles.meta}>
                  <strong>{comment.name}</strong> <span>{comment.time}</span>
                </p>
                <p className={styles.commentText}>{comment.text}</p>

                <div className={styles.actions}>
                  <button type="button" className={styles.textAction}>
                    Reply
                  </button>
                  <button type="button" className={styles.textAction} aria-label="More options">
                    ...
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <footer className={styles.composer}>
          <span className={styles.userAvatar} aria-hidden="true" />

          <div className={styles.inputWrap}>
            <input
              type="text"
              className={styles.input}
              placeholder="Add a comment at..."
              aria-label="Add comment"
            />
            <span className={styles.timestamp}>1:26</span>
          </div>
        </footer>
      </div>
    </section>
  );
}