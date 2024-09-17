import React from 'react';

interface SkeletonProps {
  className: string;
}

const Skeleton = ({ className }: SkeletonProps) => (
    <p aria-live="polite" aria-busy="true" className={className}>
      <span className="inline-flex w-full animate-pulse select-none rounded-xl bg-gray-300 leading-none">
        ‌
      </span>
      <br />
    </p>
  )
  
  const SVGSkeleton = ({ className }: SkeletonProps) => (
    <svg
      className={
        className + " animate-pulse rounded bg-gray-300"
      }
    />
  )
  
  export { Skeleton, SVGSkeleton }