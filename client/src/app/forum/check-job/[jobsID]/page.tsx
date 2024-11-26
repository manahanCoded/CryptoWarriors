import checkJob from "@/Configure/checkJob";
import CheckJobPage from "./CheckJobPage";

export default async function CheckJob({ params }: { params: { jobsID: string } }) {
  const { jobsID } = await params; 
  const res = await fetch("http://localhost:5000/api/job/display");
  if (!res.ok) {
    throw new Error("Failed to fetch jobs data");
  }
  const data: checkJob[] = await res.json();

  const job = data.find((job) => job.id === parseInt(jobsID));

  if (!job) {
    return (
      <div>
        <h1>Job not found</h1>
      </div>
    );
  }
  return (
    <>
      <CheckJobPage information={job} />
    </>
  );
}
