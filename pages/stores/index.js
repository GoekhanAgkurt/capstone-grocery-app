import StoresList from "@/components/StoreList";
import { StyledCreateLink } from "@/components/Buttons";
import Icon from "@/components/Icons";

export default function Stores({ stores, onDeleteStore }) {
  return (
    <main>
      <StoreList stores={stores} onDeleteStore={onDeleteStore} />
      <StyledCreateLink href="/stores/create">
        <Icon variant="plus" color="var(--primaryButtonColor)" size="30" />
      </StyledCreateLink>
    </main>
  );
}
