import ProductsList from "@/components/ProductsList";
import Icon from "@/components/Icons";
import { StyledCreateLink } from "@/components/Buttons";

export default function HomePage({
  products,
  shoppingListProducts,
  onDeleteProduct,
  onToggleShoppingList,
}) {
  return (
    <main>
      <ProductsList
        products={products}
        shoppingListProducts={shoppingListProducts}
        onDeleteProduct={onDeleteProduct}
        onToggleShoppingList={onToggleShoppingList}
      ></ProductsList>
      <StyledCreateLink href="/create">
        <Icon variant="plus" color="var(--primaryButtonColor)" size="30" />
      </StyledCreateLink>
    </main>
  );
}
