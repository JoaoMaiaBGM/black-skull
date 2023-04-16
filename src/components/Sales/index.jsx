import { SalesList } from "components/SalesList";
import { SalesContainer } from "./style";

export function Sales() {
  return (
    <>
      <SalesContainer>
        <h2 className="salesTitle">Lançamentos</h2>
        <SalesList />
      </SalesContainer>
    </>
  );
}
