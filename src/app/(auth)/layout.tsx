import Image from "next/image";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full lg:flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-4 pt-16 lg:pt-6">
          <h1 className="text-3xl font-bold text-orange-300">LMS</h1>
          <p className="text-base text-muted-foreground">
            Learning Management System
          </p>
        </div>
        <div className="flex items-center justify-center mt-8 lg:mt-6 aspect-square">
          {children}
        </div>
      </div>

      <div className="h-full bg-gradient-to-b from-orange-400 to-orange-600 hidden lg:flex flex-col justify-center items-center">
        <h2 className="text-2xl lg:text-5xl text-white font-bold pb-6">LMS</h2>
        <Image
          width={500}
          height={500}
          className=""
          src="https://cdn.dribbble.com/userupload/16917381/file/original-d9c12068cb3b59dc8cf4fca622b2d60a.png?resize=1024x768&vertical=center"
          alt="cover"
        />
      </div>
    </div>
  );
};

export default AuthLayout;
