const ChurchMeeting = () => {
  const meetingImg = "/assets/church-meeting.jpg";
  return (
    <section className="mt-6">
      <div className="rounded-2xl overflow-hidden relative shadow-md bg-primary">
        <img
          src={meetingImg}
          alt="Church meeting"
          className="w-full h-40 object-cover opacity-60"
          loading="lazy"
          width={800}
          height={512}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/50" />
        <div className="absolute inset-0 flex flex-col justify-center p-5">
          <h4 className="text-primary-foreground font-extrabold text-lg leading-tight">
            Church Committee Meeting
          </h4>
          <p className="text-primary-foreground/70 text-xs mt-2 leading-relaxed">
            Join us for important discussions about the upcoming church initiatives and community outreach programs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChurchMeeting;
