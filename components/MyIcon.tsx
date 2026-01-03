import {FC} from "hono/jsx";
import {css} from "hono/css";

type MyIconProps = {
  src: string;
};

export const MyIcon: FC<MyIconProps> = (props) => {
  const styledContainer = css`
    position: relative;
  `;
  const styledImage = css`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 3px solid rgba(0, 198, 255, 0.5);
    box-shadow: 0 0 20px rgba(0, 198, 255, 0.3);
    object-fit: cover;
  `;
  return (
    <div class={styledContainer}>
      <img class={styledImage} src={props.src} alt="icon" />
    </div>
  );
};
