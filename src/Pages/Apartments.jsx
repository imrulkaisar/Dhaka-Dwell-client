/**
 * ==============================
 * Requirements
 * ==============================
 *
 * [Done] 1. You have to show all the rooms here with following information:
            A. Apartment image
            B. Floor no
            C. Block name
            D. Apartment no
            E. Rent
            F. Agreement button

 * [Done] 2. Note: You have to store rooms information in the database manually.
 * [TODO] 3. On clicking on the agreement button the data will be stored in the database with following information:
            A. User name(who want to make an agreement/logged in user)
            B. User email(who want to make an agreement/logged in user)
            C. Floor no
            D. Block name
            E. Apartment no
            F. Rent
            G. Status(pending by default)

 * [TODO] 4. Note: Apply pagination at the bottom of this page. Every page will have a maximum of 6 apartment information. Rest will be on other pages following previous rule 6 apartment information in one page.
 */

import { useQuery } from "@tanstack/react-query";
import PageHeader from "../Components/PageHeader";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import ApartmentCard from "../Components/Apartments/ApartmentCard";
import { useEffect, useState } from "react";

const Apartments = () => {
  const [totalApartments, setTotalApartments] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const pageSize = 6;

  const axiosPublic = useAxiosPublic();

  const getTotalApartNumber = async () => {
    try {
      const res = await axiosPublic.get("/apartments/total");
      return res.data.total;
    } catch (error) {
      console.error(error);
    }
  };

  const loadApartments = async () => {
    try {
      const res = await axiosPublic.get(
        `/apartments/get-all?page=${currentPage}&size=${pageSize}`
      );
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const { data: totalNum = 0, isPending: isNumLoading } = useQuery({
    queryKey: ["apartmentNum"],
    queryFn: getTotalApartNumber,
  });
  const { data: apartments = [], isPending } = useQuery({
    queryKey: ["apartment", currentPage, pageSize],
    queryFn: loadApartments,
    enabled: totalNum > 0,
  });

  useEffect(() => {
    if (!isNumLoading) {
      setTotalApartments(totalNum);
    }
  }, [isNumLoading, totalNum]);

  useEffect(() => {
    setTotalPages(Math.ceil(totalNum / pageSize));
  }, [totalNum]);

  // console.log(totalPages, totalNum);

  return (
    <div>
      <PageHeader
        title="All Apartments"
        description="Explore our diverse range of thoughtfully designed apartments. Find your ideal home and experience the ultimate in comfort and convenience."
      />

      <section className="py-20">
        <div className="container-area space-y-12">
          <div className="text-center">
            <p>
              Showing [{(currentPage - 1) * pageSize + 1}-
              {currentPage * pageSize}] of Total {totalNum} apartments
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {isPending && (
              <div className="py-20 animate-pulse">
                <p className="text-center text-2xl">
                  Data is loading ... ... ...
                </p>
              </div>
            )}
            {apartments.length > 0 &&
              apartments.map((apartment) => (
                <ApartmentCard key={apartment._id} data={apartment} />
              ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center mt-4">
              {[...Array(totalPages).keys()].map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page + 1)}
                  className={`mx-2 px-4 py-2 border rounded-md ${
                    currentPage === page + 1 ? "bg-secondary text-white" : ""
                  }`}
                >
                  {page + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Apartments;
