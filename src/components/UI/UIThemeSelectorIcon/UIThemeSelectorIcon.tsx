import classes from './UIThemeSelectorIcon.module.scss';

interface Props {
  color: string;
  onClick?: () => void;
}

const UIThemeSelectorIcon = ({ color, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      style={{ backgroundColor: color }}
      className={classes.theme_selector}
    />
  );
};

export default UIThemeSelectorIcon;
