import Image from 'next/image';
import Link from 'next/link';
import React from 'react'


interface Props {
    imgUrl: string;
    alt: string;
    value: string | number;
    title: string;
    href?: string;
    textStyle?: string;
    isIntructor?: boolean;
  }
  
const CourseMetric = ({
    imgUrl,
    alt,
    title,
    value,
    href,
    textStyle,
    isIntructor
}: Props) => {
  const metricContent = (
    <>
        <Image
            src={imgUrl}
            alt={alt}
            width={16}
            height={16}
            className={`object-cover ${href && 'rounded-full'}`}
        />
         <p className={`flex items-center gap-1 ${textStyle}`}>
        <span>{value}</span>

        <span
          className={`small-regular line-clamp-1 ${
            isIntructor && 'max-sm:hidden'
          }`}
        >
          {title}
        </span>
      </p>

    </>
  )
  
  /**
   * Author is clickable
   */
  if (href) {
    return (
      <Link href={href} className="flex-center gap-1">
        {metricContent}
      </Link>
    );
}

return (
    <div className="flex-center flex-wrap gap-1">{metricContent}</div>
  );

}

export default CourseMetric