import { SalesList } from "components/SalesList";
import { SalesContainer } from "./style";

export function Sales() {
  return (
    <>
      <SalesContainer id="promocoes">
        <h2 className="salesTitle">Promoções</h2>
        <SalesList />
      </SalesContainer>
    </>
  );
}
