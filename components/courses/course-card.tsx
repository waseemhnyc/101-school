import Link from 'next/link'

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  course: {
    slug: string
    title: string
    description: string
    image: { source: string } | null
  }
}

export function CourseCard({ course, ...props }: Props) {
  return (
    <Link href={`/courses/${course.slug}`} {...props}>
      <div className="space-y-1">
        <h3 className="text-lg">{course.title}</h3>
        {course.description && <h4 className="text-sm">{course.description}</h4>}
        {course.image?.source && (
          <div className="rounded-md overflow-hidden max-w-[500px]">
            <img
              src={course.image.source}
              alt={course.title}
              className="h-auto w-auto object-cover aspect-video transition-all hover:scale-105"
            />
          </div>
        )}
      </div>
    </Link>
  )
}
