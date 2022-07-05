import Image from 'next/image';

export interface IAvatar {}

const Avatar: React.FC<IAvatar> = () => {
  return (
    <div className="rounded-full border-2 h-16 w-16 relative">
      <Image
        src="/avatar.png"
        layout="fill"
        objectFit="cover"
        className="rounded-full"
      />
    </div>
  );
};

export default Avatar;
