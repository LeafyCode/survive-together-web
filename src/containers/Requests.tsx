import React, { useState } from "react";
import {
  Column,
  Table,
  AutoSizer,
  SortDirection,
  SortIndicator,
  SortDirectionType,
} from "react-virtualized";
import { useQuery } from "@apollo/react-hooks";
import moment from "moment";
import { useTranslation } from "react-i18next";
import { NEED } from "../graphql-types/need";
import {
  need_order_by,
  order_by,
} from "../graphql-types/generated/graphql-global-types";
import { Need, NeedVariables } from "../graphql-types/generated/Need";
import { RequestTableRowDataType } from "../types";
import {
  STPageContainer,
  STPageContentWrapper,
} from "../components/shared/styledComponents";
import { useStoreState } from "../store";
import { STPageHeaderWithFilters } from "../components/shared/STPageHeaderWithFilters";

export const Requests = () => {
  const { t } = useTranslation();

  const city = useStoreState((state) => state.area.city);

  const [sortDirection, setSortDirection] = useState<SortDirectionType>(
    SortDirection.ASC
  );
  const [sortBy, setSortBy] = useState<string>();

  const {
    refetch: needsDataRefetch,
    loading: needsDataLoading,
    error: needsDataError,
    data: needsData,
  } = useQuery<Need, NeedVariables>(NEED, {
    variables: {
      where: {
        cityId: {
          _eq: city?.value || null,
        },
      },
      order_by: [
        {
          created_at: order_by.desc,
        },
      ],
    },
  });

  return (
    <div>
      <STPageHeaderWithFilters
        title={t("requestPage")}
        subTitle={t("requestPageSubtitle")}
      />

      <STPageContainer className="container">
        <STPageContentWrapper>
          <br />
          {needsDataError && (
            <div className="full-notification notification is-danger is-centered">
              Something went wrong. I think our servers are getting fried due to
              the heavy load. Or something else... We&apos;ll look into it!
            </div>
          )}
          {needsDataLoading && (
            <progress className="progress is-small is-primary" max="100" />
          )}
          {needsData && needsData.need.length === 0 && (
            <div className="full-notification notification  is-centered">
              {t("emptyRequestContent")}
            </div>
          )}
          {!needsDataLoading && needsData && (
            <>
              <AutoSizer disableHeight>
                {({ width }) => (
                  <Table
                    sort={({
                      sortBy: columnSortBy,
                      sortDirection: columnSortDirection,
                    }) => {
                      setSortBy(columnSortBy);
                      setSortDirection(columnSortDirection);

                      let orderBy: need_order_by = {
                        [columnSortBy]:
                          columnSortDirection === "ASC"
                            ? order_by.asc
                            : order_by.desc,
                      };

                      if (columnSortBy === "city") {
                        orderBy = {
                          city: {
                            name:
                              columnSortDirection === "ASC"
                                ? order_by.asc
                                : order_by.desc,
                          },
                        };
                      }

                      needsDataRefetch({
                        order_by: [orderBy],
                      }).then();
                    }}
                    width={width}
                    sortBy={sortBy}
                    height={500}
                    headerHeight={39}
                    rowHeight={38}
                    sortDirection={sortDirection}
                    className="table"
                    headerClassName="st-thead"
                    rowClassName="st-tr"
                    rowCount={needsData?.need.length}
                    rowGetter={({ index }) => needsData?.need[index]}
                  >
                    <Column
                      label={t("contactPersonRequestTable")}
                      dataKey="contactPersonName"
                      width={200}
                      headerRenderer={({ dataKey, label }) => (
                        <div>
                          {label}

                          {sortBy === dataKey && (
                            <SortIndicator sortDirection={sortDirection} />
                          )}
                        </div>
                      )}
                    />
                    <Column
                      width={200}
                      label={t("contactNumberRequestTable")}
                      dataKey="contactNumber"
                    />
                    <Column
                      width={120}
                      label={t("noOfPeopleRequestTable")}
                      dataKey="numberOfPeople"
                    />
                    <Column
                      width={200}
                      label={t("cityRequestTable")}
                      dataKey="city"
                      cellRenderer={({ rowData }: RequestTableRowDataType) => (
                        <span>{rowData.city.name}</span>
                      )}
                    />
                    <Column
                      width={200}
                      label={t("createdAtTable")}
                      dataKey="created_at"
                      cellRenderer={({ rowData }: RequestTableRowDataType) => (
                        <span>
                          {moment(rowData.created_at).format(
                            "MM/DD/YY, h:mm a"
                          )}
                        </span>
                      )}
                    />
                    <Column
                      width={200}
                      label={t("requestItemTable")}
                      dataKey="item_category_needs"
                      flexGrow={1}
                      cellRenderer={({ rowData }: RequestTableRowDataType) => (
                        <span
                          className="tags"
                          title={rowData.item_category_needs
                            .map((category) => category.item_category.name)
                            .join(", ")}
                        >
                          {rowData.item_category_needs.map((category) => (
                            <span
                              key={category.item_category.id}
                              className="tag"
                            >
                              {category.item_category.name}
                            </span>
                          ))}
                        </span>
                      )}
                    />
                  </Table>
                )}
              </AutoSizer>

              <br />
            </>
          )}
        </STPageContentWrapper>
      </STPageContainer>
    </div>
  );
};
