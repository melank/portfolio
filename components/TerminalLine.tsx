import {FC} from "hono/jsx";
import {terminalLine, terminalPrompt, terminalValue} from "../assets/styles/index";

type TerminalCommandProps = {
  command: string;
  output: string;
};

export const TerminalCommand: FC<TerminalCommandProps> = ({command, output}) => (
  <>
    <p class={terminalLine}>
      <span class={terminalPrompt}>$ </span>{command}
    </p>
    <p class={terminalLine}>
      <span class={terminalValue}>{output}</span>
    </p>
  </>
);

type TerminalEntry = {
  command: string;
  output: string;
};

type TerminalLinesProps = {
  entries: TerminalEntry[];
};

export const TerminalLines: FC<TerminalLinesProps> = ({entries}) => (
  <>
    {entries.map((entry) => (
      <TerminalCommand command={entry.command} output={entry.output} />
    ))}
  </>
);
