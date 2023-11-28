import formatDateString from "../../utils/formateDateString";

const CouponRow = ({ data }) => {
  const {
    _id,
    code,
    discount,
    discountType,
    description,
    expiredDate,
    allowedMembers,
    maxUse,
    createdAt,
  } = data || {};
  return (
    <tr className="bg-white border-b text-secondary">
      <td className="w-4 p-4">
        <div className="flex items-center">
          <input
            id="checkbox-table-search-1"
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="checkbox-table-search-1" className="sr-only">
            checkbox
          </label>
        </div>
      </td>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        {code}
      </th>
      <td className="px-6 py-4">{discount}</td>
      <td className="px-6 py-4 uppercase">{discountType}</td>
      <td className="px-6 py-4">{formatDateString(expiredDate)}</td>
      <td className="px-6 py-4">{maxUse}</td>
    </tr>
  );
};

export default CouponRow;
