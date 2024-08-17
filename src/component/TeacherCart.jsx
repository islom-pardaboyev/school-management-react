import { LuMoreHorizontal } from "react-icons/lu";
import { FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { useContext } from "react";
import { MainContext } from "../context/Context";
import { Link } from "react-router-dom";

function TeacherCart({ teacher }) {
  const { removeTeacher } = useContext(MainContext);
  const { fullName, email, subject, classes, gender, imgSrc, id } = teacher;
  return (
    <tr className=" border-b border-black/30 even:bg-[#EBF6FF80]">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        <div className="flex items-center gap-2">
          <img
            width={24}
            height={24}
            className="rounded-full object-cover"
            src={imgSrc}
            alt=""
          />
          <h1>{fullName}</h1>
        </div>
      </th>
      <td className="px-6 py-4 capitalize">{subject}</td>
      <td className="px-6 py-4 capitalize">{classes}</td>
      <td className="px-6 py-4">{email}</td>
      <td className="px-6 py-4 capitalize">{gender}</td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <Link to={`/teachers/about/${id}`}>
            <LuMoreHorizontal className="cursor-pointer" />
          </Link>
          <FaTrash
            onClick={() => removeTeacher(id)}
            className="text-rose-600 cursor-pointer"
          />
          <MdEdit className="text-green-600 cursor-pointer" />
        </div>
      </td>
    </tr>
  );
}

export default TeacherCart;
