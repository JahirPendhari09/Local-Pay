import { Skeleton, SkeletonCircle, SkeletonText,Stack } from '@chakra-ui/react'

function LoadingSkeleton() {
  return (
    <Stack data-cy="loading-indicator">
      {/* Add chakra-ui Skeleton components here */}
      <Skeleton height='20px' />
      <Skeleton height='20px' />
      <Skeleton height='20px' />
      <Skeleton height='20px' />
      <Skeleton height='20px' />
      <Skeleton height='20px' />
      <Skeleton height='20px' />
      <Skeleton height='20px' />
      <Skeleton height='20px' />
      <Skeleton height='20px' />
      <Skeleton height='20px' />
      <Skeleton height='20px' />
    </Stack>
  )
}

export default LoadingSkeleton
