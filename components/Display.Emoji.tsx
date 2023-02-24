import Face from "@components/Display.Face";

const Emoji = ({ children, ...rest }) => (
  <div className="text-[20vmin]">
    <div>
      <Face emotion={children} {...rest} />
    </div>
    <span>{children}</span>
  </div>
);

export default Emoji;
