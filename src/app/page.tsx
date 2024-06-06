import IsAuth from "./services/isAuth";
import StoreLayout from "./store/StoreLayout";

export default function Home() {

  return (
    <StoreLayout>
      <IsAuth />
    </StoreLayout>
  );
}
