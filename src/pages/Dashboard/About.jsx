import React, { useContext } from 'react'
import { MainContext } from '../../context/Context'
import { useParams } from 'react-router-dom';

export default function About() {
  const {teachersArray} = useContext(MainContext)
  const teacherId = parseFloat(useParams().id)

  const teacher = teachersArray.find((teacher) => teacher.id === teacherId)

  console.log(teacher)
  
  return (
    <div className=''></div>
  )
}
