import { CreateProductCatInput, UpdateAttributeInput } from "@/gql/graphql";
import {
  useAttributesQuery,
  useDeleteAttributeMutation,
} from "@/gql/graphql-hooks";
import Link from "next/link";
import React, { Dispatch } from "react";

type Props = {
  setData: Dispatch<
    React.SetStateAction<CreateProductCatInput | UpdateAttributeInput>
  >;
};

const ProductAttributeList = ({ setData }: Props) => {
  const { attributes, loading, error, errors } = useAttributesQuery({});
  const {
    deleteAttribute,
    loading: deleteLoading,
    error: deleteError,
  } = useDeleteAttributeMutation();

  const handleEditAttribute = (item: UpdateAttributeInput) => {
    setData({
      id: item.id,
      title: item.title,
      content: item.content,
      values: item.values || [],
    });
  };

  const handleDeleteAttribute = (id: string) => {
    deleteAttribute({
      variables: {
        id,
      },
    });
  };

  return (
    <div>
      <div className="card mb-4">
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
                      Title
                    </th>
                    <th className="align-middle" scope="col">
                      Update
                    </th>
                    <th className="align-middle text-center" scope="col">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {error && <div className="this-error">this is error</div>}
                  {!error &&
                    attributes &&
                    attributes.length > 0 &&
                    attributes.map((item) => (
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
                        <td>{item.title}</td>
                        <td>{item.updatedAt}</td>
                        <td className="text-center flex-center">
                          <div
                            className="btn btn-xs bg-warning me-2 align-middle flex-center"
                            onClick={() =>
                              handleEditAttribute(item as UpdateAttributeInput)
                            }
                          >
                            <i className="icon material-icons md-edit me-1"></i>
                            Edit
                          </div>
                          <div
                            className="btn btn-xs bg-warning me-2 align-middle flex-center"
                            onClick={() => {
                              handleDeleteAttribute(item.id);
                            }}
                          >
                            <i className="icon material-icons md-delete me-1"></i>
                            Del
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAttributeList;
