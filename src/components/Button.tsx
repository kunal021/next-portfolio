import Link from "next/link";

function Button() {
  return (
    <Link
      href={
        "https://drive.google.com/file/d/1ot4zbnPUHNc25x1zyalw5K3Uzr_MazfF/view?usp=drive_link"
      }
      target="_blank"
    >
      <button
        id="cvbtn"
        className="rounded-2xl border-2 border-dashed border-black dark:border-white px-6 py-3 font-semibold uppercase transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] dark:hover:shadow-[4px_4px_0px_white] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
      >
        Resume
      </button>
    </Link>
  );
}

export default Button;
