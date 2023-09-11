import { ContentHeader } from "@/components/AdminComponents";
import { useProductsQuery } from "@/gql/graphql-hooks";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

type Props = {};

const ProductsPage = (props: Props) => {
  const router = useRouter();

  const { products, loading, error, errors } = useProductsQuery({});

  console.log({ products, error, errors });

  const handleCreateProductClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    router.push("/admin/products/create");
  };

  return (
    <>
      <ContentHeader
        title="Products"
        description=""
        titleClick="Create Product"
        onClick={handleCreateProductClick}
      />
      <div className="card mb-4">
        <header className="card-header">
          <div className="row align-items-center">
            <div className="col-md-3 col-12 me-auto mb-md-0 mb-3">
              <div className="custom_select">
                <select className="form-select select-nice">
                  <option selected>All Categories</option>
                  <option>Women's Clothing</option>
                  <option>Men's Clothing</option>
                  <option>Cellphones</option>
                  <option>Computer & Office</option>
                  <option>Consumer Electronics</option>
                  <option>Jewelry & Accessories</option>
                  <option>Home & Garden</option>
                  <option>Luggage & Bags</option>
                  <option>Shoes</option>
                  <option>Mother & Kids</option>
                </select>
              </div>
            </div>
            <div className="col-md-2 col-6">
              <input type="date" value="02.05.2021" className="form-control" />
            </div>
            <div className="col-md-2 col-6">
              <div className="custom_select">
                <select className="form-select select-nice">
                  <option selected>Status</option>
                  <option>All</option>
                  <option>Paid</option>
                  <option>Chargeback</option>
                  <option>Refund</option>
                </select>
              </div>
            </div>
          </div>
        </header>
        <div className="card-body">
          <div className="table-responsive">
            <div className="table-responsive">
              <table className="table align-middle table-nowrap mb-0">
                <thead className="table-light">
                  <tr>
                    <th scope="col" className="text-center">
                      <div className="form-check align-middle">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="transactionCheck01"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="transactionCheck01"
                        ></label>
                      </div>
                    </th>
                    <th className="align-middle" scope="col">
                      Order ID
                    </th>
                    <th className="align-middle" scope="col">
                      Billing Name
                    </th>
                    <th className="align-middle" scope="col">
                      Date
                    </th>
                    <th className="align-middle" scope="col">
                      Total
                    </th>
                    <th className="align-middle" scope="col">
                      Payment Status
                    </th>
                    <th className="align-middle" scope="col">
                      Payment Method
                    </th>
                    <th className="align-middle" scope="col">
                      View Details
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {error && <div className="this-error">this is error</div>}
                  {!error &&
                    products &&
                    products.length > 0 &&
                    products.map((item) => (
                      <tr key={item.id}>
                        <td className="text-center">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="transactionCheck02"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="transactionCheck02"
                            ></label>
                          </div>
                        </td>
                        <td>
                          <a href="#" className="fw-bold">
                            #SK2540
                          </a>
                        </td>
                        <td>{item.title}</td>
                        <td>{item.updatedAt}</td>
                        <td>${item.price}</td>
                        <td>
                          <span className="badge badge-pill badge-soft-success">
                            Paid
                          </span>
                        </td>
                        <td className="">
                          <div className="flex-center">
                            <i className="material-icons md-payment font-xxl text-muted mr-5"></i>{" "}
                            Mastercard
                          </div>
                        </td>
                        <td>
                          <Link href="#" className="btn btn-xs">
                            View details
                          </Link>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
