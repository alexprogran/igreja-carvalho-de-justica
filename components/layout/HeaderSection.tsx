import { Bell } from "lucide-react";

const HeaderSection = () => {
  const avatarImg = "/assets/avatar.jpg";
  return (
  <div className="flex items-center justify-between px-4 pt-6 pb-3">
    <div className="flex items-center gap-3">
      <img
        src={avatarImg}
        alt="Avatar"
        className="w-12 h-12 rounded-full object-cover border-2 border-primary"
        width={48}
        height={48}
      />
      <div>
        <p className="text-xs text-church-green font-semibold">Bem vindo!</p>
        <h1 className="text-lg font-extrabold text-foreground">Alex Neves</h1>
      </div>
    </div>
    <button className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-primary">
      <Bell className="w-5 h-5" />
    </button>
  </div>
  );
};

export default HeaderSection;
