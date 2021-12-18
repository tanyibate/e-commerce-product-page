import React from "react";
import PageLayout from "../../components/page-layout/PageLayout";
import ProductImages from "../../components/product-images/ProductImages";

export default function ItemPage() {
  return (
    <PageLayout>
      <ProductImages key="productimages" />
    </PageLayout>
  );
}
