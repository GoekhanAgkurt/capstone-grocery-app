import ProductsList from "@/components/ProductsList";
import Icon from "@/components/Icons";
import { StyledCreateLink } from "@/components/Buttons";

export default function HomePage({ products, onDeleteProduct }) {
  return (
    <main>
      <ProductsList
        onDeleteProduct={onDeleteProduct}
        products={products}
      ></ProductsList>
      <StyledCreateLink href="/create">
        <Icon variant="plus" color="var(--primaryButtonColor)" size="30" />
      </StyledCreateLink>
    </main>
  );
}
