import Link from 'next/link';
import styles from './Card.module.css';

interface Props {
    name: string
    slug: string
    data: string
    patch: string
}

export function Card({ name, slug, data, patch }: Props) {
    return (
        <div className={styles.card__father}>
            <div className={styles.card}>
                <div className={styles.card__front} style={{ backgroundImage: `url('${patch}')` }}>
                    <div className={styles.bg}></div>
                    <div className={styles.body__card_front}>
                        <h1 className='text-2xl'>{name}</h1>
                    </div>
                </div>
                <div className={styles.card__back}>
                    <div className={`${styles.body__card_back} flex flex-col min-h-full`}>
                        <h2 className='dark:text-black text-lg'>{name}</h2>
                        <p className={`${styles.body__card_text} dark:text-black flex-1`}>{data}</p>

                        <Link href={`/Products/Product?slug=${slug}`} className={styles.body__card_btn}>
                            Leer Más
                            <div className={styles.arrow__wrapper}>
                                <div className={styles.arrow}></div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}