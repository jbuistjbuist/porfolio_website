import Cube from '@/_components/cube';

export default function SectionLayout({ children }: { children: React.ReactNode }) {

  return (
    <>
      <Cube />
      {children}
    </>
  );
}