import { Card } from "../components/Card/Card";
import { Products } from "../products";

export default function Home() {
    return (
        <div className="flex items-center justify-center flex-wrap w-[1100px] m-auto">
            {Products.map((product, index) => (
                <Card 
                    key={index}
                    name={product.name} 
                    slug={product.slug}
                    data={product.data} 
                    patch={product.img}
                />
            ))}
        </div>
    );
}
