export type Contact = {
  id: string;
  title: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
    title?: string;
}>;
  link: string;
  info: string;
};
