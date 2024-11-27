import Add from "../Add";

export default async function Module({ params }: { params: { module: string } }) {
  const { module } = await params; 
  const query = await module[0]

  if (query === "add"){
    return(
        <Add/>
    )
  }
  return(
    <div>
        <h1>asdasd</h1>
    </div>
  )
}
