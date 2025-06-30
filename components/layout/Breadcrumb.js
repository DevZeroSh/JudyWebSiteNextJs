import { useTranslations } from "next-intl"
import Link from "next/link"

export default function Breadcrumb({ breadcrumbTitle ,img}) {
    const t= useTranslations();
    return (
        <>
            <section className="page-title centred">
                <div className="bg-layer" style={{ backgroundImage: `url(${img})` }}></div>
                <div className="pattern-layer">
                    <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-18.png)' }}></div>
                    <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-17.png)' }}></div>
                </div>
                <div className="auto-container">
                <div className="content-box">
                        <h1>{breadcrumbTitle}</h1>
                        <ul className="bread-crumb clearfix">
                            <li><Link href="/">{t("home")}</Link></li>
                            <li>{breadcrumbTitle}</li>
                        </ul>
                    </div>
                </div>
            </section>

        </>
    )
}
