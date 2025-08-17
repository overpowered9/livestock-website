"use client"

import { useState } from "react"
import Image, { type ImageProps } from "next/image"

type SafeImageProps = Omit<ImageProps, "src"> & {
  srcPrimary: string
  srcFallback: string
}

export function SafeImage({ srcPrimary, srcFallback, onError, ...rest }: SafeImageProps) {
  const [src, setSrc] = useState(srcPrimary)
  return (
    <Image
      {...rest}
      src={src}
      onError={(e) => {
        if (src !== srcFallback) setSrc(srcFallback)
        onError?.(e)
      }}
    />
  )
}
