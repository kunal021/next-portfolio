function Button() {
  return (
    <button className="button button--pan text-xl px-5 py-3 rounded-lg border-black border-2 z-10">
      <span className="rounded-lg border-black">Download CV</span>
      <style jsx>
        {`
          .button {
            cursor: pointer;
            background: transparent;
            border: none;
            margin: 0;
            font-family: inherit;
            font-size: inherit;
            position: relative;
          }

          .button::before,
          .button::after {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }

          .button--pan {
            font-weight: 700;
            overflow: hidden;
            color: #fff;
          }

          .button--pan span {
            position: relative;
            mix-blend-mode: difference;
          }

          .button--pan::before {
            content: "";
            background: #fff;
            transition: transform 0.3s cubic-bezier(0.7, 0, 0.2, 1);
          }

          .button--pan:hover::before {
            transform: translate3d(0, -100%, 0);
          }
        `}
      </style>
    </button>
  );
}

export default Button;
