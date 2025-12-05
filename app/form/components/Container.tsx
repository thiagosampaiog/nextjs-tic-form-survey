type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div className="w-2xs flex flex-col items-center px-4 py-2 gap-5 bg-white shadow-md rounded-lg text-center justify-center">
      {children}
    </div>
  );
}
