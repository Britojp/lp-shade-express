import ProductCard from "../ProductCard";
import rollerBlindImg from "@assets/generated_images/roller_blind_product_shot.png";

export default function ProductCardExample() {
  return (
    <div className="max-w-sm mx-auto">
      <ProductCard
        id={1}
        name="Persiana Rolo Blackout"
        description="Persiana de enrolar com tecido blackout. Ideal para quartos, salas e escritórios."
        image={rollerBlindImg}
        category="Persianas"
        benefits={[
          "Controle total de luminosidade",
          "Fácil manutenção",
          "Disponível em várias cores",
        ]}
      />
    </div>
  );
}
