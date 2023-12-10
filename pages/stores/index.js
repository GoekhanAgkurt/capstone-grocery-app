import StoreList from "@/components/StoreList";
import Icon from "@/components/Icons";
import { StyledCreateLink } from "@/components/Buttons";

export default function Stores() {
  return (
    <main>
      <StoreList />
      <StyledCreateLink href="/stores/create">
        <Icon variant="plus" color="var(--primaryButtonColor)" size="30" />
      </StyledCreateLink>
    </main>
  );
}
