import { AiFillApple } from 'react-icons/ai';
import { pathForCamera } from '@/app/paths';
import { Camera, formatCameraText, isCameraApple } from '.';
import EntityLink, {
  EntityLinkExternalProps,
} from '@/components/primitives/EntityLink';
import { TbCamera } from 'react-icons/tb';

export default function PhotoCamera({
  camera,
  hideAppleIcon,
  type,
  badged,
  contrast,
  prefetch,
  countOnHover,
  className,
}: {
  camera: Camera
  hideAppleIcon?: boolean
  countOnHover?: number
} & EntityLinkExternalProps) {
  const isApple = isCameraApple(camera);
  const showAppleIcon = !hideAppleIcon && isApple;

  return (
    <EntityLink
      label={formatCameraText(camera)}
      href={pathForCamera(camera)}
      icon={showAppleIcon
        ? <AiFillApple
          title="Apple"
          className="translate-x-[-1px] translate-y-[-0.5px]"
          size={15}
        />
        : <TbCamera
          size={15}
          className="translate-x-[-0.5px] translate-y-[1px]"
        />}
      type={type}
      className={className}
      badged={badged}
      contrast={contrast}
      prefetch={prefetch}
      hoverEntity={countOnHover}
    />
  );
}
