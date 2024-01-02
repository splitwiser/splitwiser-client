type Props = {
  children: React.ReactNode;
};

export default function PageTitle({ children }: Props) {
  return <h1 className="text-3xl mb-5">{children}</h1>;
}
