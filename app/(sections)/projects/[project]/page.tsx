'use client'
import { useParams } from "next/navigation";


export default function Project() {
  const { project } = useParams();
 
  return (
    <h1>{project}</h1>
  )
}