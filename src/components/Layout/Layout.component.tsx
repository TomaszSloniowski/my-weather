import { ReactElement } from "react";
import background from "../../assets/sky_bg.jpg";

export const Layout = (props: { children: ReactElement }) => {
  const { children } = props;

  return (
    <div
      style={{
        display: "flex",
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto",
        width: "100vw",
        height: "100vh",
        justifyContent: "start",
      }}
    >
      {children}
    </div>
  );
};
