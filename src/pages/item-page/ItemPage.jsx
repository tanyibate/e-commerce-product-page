import React from "react";
import PageLayout from "../../components/page-layout/PageLayout";
import ProductDescription from "../../components/product-description/ProductDescription";
import ProductImages from "../../components/product-images/ProductImages";

export default function ItemPage() {
  const product = {
    name: "Fall Limited Edition Sneakers",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    price: 250.0,
    discount: 0.5,
    id: 123,
  };
  return (
    <PageLayout>
      <ProductImages key="productimages" />
      <ProductDescription product={product} />
    </PageLayout>
  );
}
