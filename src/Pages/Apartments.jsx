/**
 * ==============================
 * Requirements
 * ==============================
 *
 * [TODO] 1. You have to show all the rooms here with following information:
            A. Apartment image
            B. Floor no
            C. Block name
            D. Apartment no
            E. Rent
            F. Agreement button

 * [TODO] 2. Note: You have to store rooms information in the database manually.
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

const Apartments = () => {
  const { data: apartments = [], isPending } = useQuery({
    queryKey: ["apartment"],
    queryFn: async () => {
      try {
        const response = await fetch("apartments.json");
        const result = await response.json(); // Parse the JSON data
        return result;
      } catch (error) {
        console.error(error);
      }
    },
  });

  console.log(apartments);

  return (
    <div>
      <PageHeader
        title="All Apartments"
        description="Explore our diverse range of thoughtfully designed apartments. Find your ideal home and experience the ultimate in comfort and convenience."
      />

      <section className="py-20">
        <div className="container-area space-y-12">
          <div className="text-center">
            <p>Total {apartments.length} apartments</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {isPending && (
              <div className="py-20 animate-pulse">
                <p className="text-center text-2xl">
                  Data is loading ... ... ...
                </p>
              </div>
            )}
            {apartments.map((apartment) => (
              <ApartmentCard key={apartment._id} data={apartment} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Apartments;
