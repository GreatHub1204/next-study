import type { ReactElement } from "react";
import PageContainer from "../../src/components/container/PageContainer";
import FormStyle from "@/src/components/formStyle";
import FullLayout from "../../src/layouts/full/FullLayout";

export default function Page() {
    return (
      <PageContainer title="Access Analysis" description="this is the access analysis page.">
        <FormStyle />
      </PageContainer>
    )
}


Page.getLayout = function getLayout(page: ReactElement){
  return <FullLayout>{page}</FullLayout>
}