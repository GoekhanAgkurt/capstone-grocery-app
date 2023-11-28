import { useRouter } from "next/router";
import Link from "next/link";
import { uid } from "uid";
import { StyledCancelButton, StyledSubmitButton } from "@/components/Buttons";
import Icon from "@/components/Icons";
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledTextArea,
  StyledButtonContainer,
} from "@/components/Forms";

export default function CreateStore({ onAddStore }) {
  const router = useRouter();
  function createStore(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const newStore = {
      name: data.storeName,
      note: data.storeNote,
      _id: uid(),
    };
    onAddStore(newStore);
    router.push("/stores");
  }
  return (
    <main>
      <h2>New Store</h2>
      <StyledForm onSubmit={createStore}>
        <StyledLabel htmlFor="storeName">Name</StyledLabel>
        <StyledInput
          id="storeName"
          name="storeName"
          type="text"
          placeholder="Enter store name"
          required
        />
        <StyledLabel htmlFor="storeNote">Note</StyledLabel>
        <StyledTextArea
          id="storeNote"
          name="storeNote"
          placeholder="Enter Note"
        />
        <StyledButtonContainer>
          <StyledCancelButton as={Link} href="/stores">
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
