import StoresList from "@/components/StoreList";
import { StyledCreateLink } from "@/components/Buttons";
import Icon from "@/components/Icons";

export default function Stores({ stores }) {
  return (
    <main>
      <StoresList stores={stores} />
      <StyledCreateLink href="/stores/create">
        <Icon variant="plus" color="var(--primaryButtonColor)" size="30" />
      </StyledCreateLink>
    </main>
  );
}
