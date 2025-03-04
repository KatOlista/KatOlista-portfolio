type Props = {
  children: string | React.ReactNode;
  label: string;
  buttonClassName?: string;
  onClick?: (
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
  label,
  onClick,
}) => {
  const style = window.innerWidth < 990 ? buttonStyle : {};

  return (
    <button
      type="button"
      onClick={onClick}
      style={style}
      className={buttonClassName}
      aria-label={label}
    >
      {children}
    </button>
  );
};
