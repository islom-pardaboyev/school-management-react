import React, { useContext } from "react";
import Title from "../../component/Title";
import TeacherCart from '../../component/TeacherCart'
import { MainContext } from "../../context/Context";
import SearchInput from "../../component/SearchInput";
import EmptyImg from "../../assets/images/empty-array.png";
import TableHeading from "../../component/TableThead";
import { Link } from "react-router-dom";
import HeaderTop from "../../component/HeaderTop";

function Teachers() {
  const tableThead = [
    {
      id: 1,
      title: "Name",
    },
    {
      id: 2,
      title: "Subject",
    },
    {
      id: 3,
      title: "Class",
    },
    {
      id: 4,
      title: "Email Adress",
    },
    {
      id: 5,
      title: "Gender",
    },
    {
      id: 6,
      title: "Actions",
    },
  ];
  const {
    showIsLogOutModal,
    setShowIsLogOutModal,
    teachersArray,
    setTeachersArray,
  } = useContext(MainContext);

  return (
    <div className="mx-[32px] h-screen overflow-y-auto">
      <HeaderTop />
      <header className="flex items-center justify-between">
        <Title
          title={"Teachers"}
          extraStyle={
            "py-[22px] font-kubmh text-start !font-medium !leading-[24.8px] !text-[20px]"
          }
        />
        <Link
          to="/teachers/add"
          className="py-3 px-[14px] bg-primary-20 text-white font-semibold leading-[17.36px] text-sm rounded"
        >
          Add Teachers
        </Link>
      </header>
      <SearchInput />
      <div className="mt-[30px]">
        {teachersArray.length ? (
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left ">
              <thead className="text-xs border-b uppercase ">
                <tr>
                  {tableThead.map((title) => (
                    <TableHeading key={title.id} title={title.title} />
                  ))}
                </tr>
              </thead>
              <tbody>
                
                {teachersArray.map(teacher => <TeacherCart key={teacher.id} teacher={teacher}/>)}
             
              </tbody>
            </table>
          </div>
        ) : (
          <img src={EmptyImg} alt="emtyp-arr" />
        )}
      </div>
    </div>
  );
}

export default Teachers;
