
export default function Home() {

  const branco : string = "white";

  return (
    <main className={"flex min-h-screen flex-col items-center justify-center bg-black "}>
      <h1 className={"text-[28px] " + (branco? `text-${branco}` : `text-[red]` )} >Hello, World!</h1>
    </main>
  )
} 