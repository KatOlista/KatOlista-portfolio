export type Contact = {
  id: string;
  target: string;
  title: string;
  icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string;
    }
  >;
  link: string;
  info: string;
};
