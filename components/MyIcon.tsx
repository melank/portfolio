import { FC } from "hono/jsx";
import { css } from "hono/css" 

type MyIconProps = { 
  src: string;
};

export const MyIcon: FC<MyIconProps> = (props: MyIconProps) => {
  const styledContainer = css`
    margin-bottom: 10px;
  `;
  const styledImage = css`
    padding: 0;
    border-radius: 20px;
  `
  return (
    <div class={styledContainer}>
      <image class={styledImage} src={props.src} width="128px" height="128px" alt="icon" />
    </div>
  );
}; 
