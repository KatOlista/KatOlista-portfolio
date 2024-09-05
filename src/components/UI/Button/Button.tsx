type Props = {
  children: string | React.ReactNode;
  buttonClassName?: string;
  onClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
  ) => void;
};

const buttonStyle: React.CSSProperties = {
  outline: 'none',
  boxShadow: 'none',
  border: 'none',
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  appearance: 'none',
  WebkitTapHighlightColor: 'transparent',
};

export const Button: React.FC<Props> = ({
  children,
  buttonClassName,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      style={buttonStyle}
      className={buttonClassName}
    >
      {children}
    </button>
  );
};
