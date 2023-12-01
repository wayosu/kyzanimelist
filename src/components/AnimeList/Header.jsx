import Link from "next/link"

const Header = ({title, linkHref, linkTitle}) => {
    return (
        <div className="flex justify-between items-center py-4">
            <h1 className="text-xl">{title}</h1>
            {
                linkHref && linkTitle 
                ?
                <Link href={linkHref} className="text-sm text-owned-grey-500 hover:text-owned-primary-500 transition-all">
                    {linkTitle}
                </Link>
                : 
                null
            }

        </div>
    )
}

export default Header