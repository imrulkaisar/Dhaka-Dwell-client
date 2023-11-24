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

import PageHeader from "../Components/PageHeader";

const Apartments = () => {
  return (
    <div>
      <PageHeader
        title="All Apartments"
        description="Explore our diverse range of thoughtfully designed apartments. Find your ideal home and experience the ultimate in comfort and convenience."
      />
    </div>
  );
};

export default Apartments;
