import { useRouter } from "next/router";
import Link from "next/link";
import { uid } from "uid";
import {
  StyledCancelButton,
  StyledSubmitButton,
  StyledButtonContainer,
} from "@/components/Buttons";
import Icon from "@/components/Icons";
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledTextArea,
} from "@/components/Forms";

export default function CreateProduct({ onAddProduct, stores }) {
  const router = useRouter();
  function createProduct(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const newProduct = {
      name: data.productName,
      note: data.productNote,
      selectedStore: data.selectedStore,
      _id: uid(),
    };
    onAddProduct(newProduct);
    router.push("/");
  }
  return (
    <main>
      <h2>New Product</h2>
      <StyledForm onSubmit={createProduct}>
        <StyledLabel htmlFor="productName">Name</StyledLabel>
        <StyledInput
          id="productName"
          name="productName"
          type="text"
          placeholder="Enter product name"
          required
        />
        <StyledLabel htmlFor="selectedStore">Store</StyledLabel>
        <StyledInput as="select" id="selectedStore" name="selectedStore">
          <option value="">--Select a store--</option>
          {stores.map((store) => (
            <option key={store._id} value={store._id}>
              {store.name}
            </option>
          ))}
        </StyledInput>
        <StyledLabel htmlFor="productNote">Note</StyledLabel>
        <StyledTextArea
          id="productNote"
          name="productNote"
          placeholder="Enter Note"
        />
        <StyledButtonContainer>
          <StyledCancelButton as={Link} href="/">
            <Icon variant="cancel" color="var(--primaryButtonColor)" />
            Cancel
          </StyledCancelButton>
          <StyledSubmitButton type="submit">
            <Icon variant="check" color="var(--primaryButtonColor)" />
            Submit
          </StyledSubmitButton>
        </StyledButtonContainer>
      </StyledForm>
    </main>
  );
}
