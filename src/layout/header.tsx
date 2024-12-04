const Header = () => {
  return (
    <div className="flex bg-slate-400 w-2/3 h-20 items-center px-8 rounded-lg">
      <nav>
        <ul className="flex gap-8 text-2xl font-medium cursor-pointer nav">
          <li>Who am I?</li>
          <li>Skills</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
