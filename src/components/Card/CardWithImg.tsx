import Image, { ImageProps } from 'next/image'

export interface ICardProps extends Omit<ImageProps, 'height' | 'width'> {
    imgHeight?: number | string
    imgWidth?: number | string
    title: string
    desc: string
    alt?: string
}

function CardWithImg({
    src,
    alt,
    imgHeight,
    imgWidth,
    title,
    desc,
}: ICardProps) {
    return (
        <div className="flex flex-col gap-4 items-center justify-center p-6 bg-white rounded-lg border border-himti-100 shadow-md">
            <a href="#" className="flex justify-center">
                <Image
                    className="w-auto rounded-t-lg"
                    src={src}
                    alt={alt}
                    height={imgHeight}
                    width={imgWidth}
                    objectFit="contain"
                />
            </a>
            <div className="flex flex-col">
                <a href="#">
                    <h5 className="text-2xl font-bold tracking-tight text-himti-500">
                        {title}
                    </h5>
                </a>
                <p className="font-normal text-himti-400">{desc}</p>
            </div>
        </div>
    )
}

export default CardWithImg
