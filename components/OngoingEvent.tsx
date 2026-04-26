const OngoingEvent = () => {
  const worshipImg = "/assets/worship-event.jpg";
  return (
  <section className="mt-6 pb-24">
    <h3 className="text-base font-extrabold text-foreground mb-3">Ongoing Event</h3>
    <div className="rounded-2xl overflow-hidden relative shadow-md">
      <img
        src={worshipImg}
        alt="Worship Night"
        className="w-full h-44 object-cover"
        loading="lazy"
        width={800}
        height={512}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
      <div className="absolute bottom-3 right-3">
        <button className="bg-primary text-primary-foreground text-xs font-bold px-5 py-2 rounded-full shadow-lg hover:bg-church-blue-dark transition-colors">
          View
        </button>
      </div>
    </div>
  </section>
  );
};

export default OngoingEvent;
