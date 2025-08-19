
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[73vh] mt-[50px] p-4">
      {/* <img src="/image/logo/not_found.png" alt="Not Found" className="h-52"/> */}
      <h2 className="text-3xl font-bold mb-2 text-[#606062]">Page Not Found</h2>
      <p className=" text-muted-foreground max-w-[700px] text-center">
        <span className="hidden sm:inline"> That URL doesn't appear to be valid. Could there be a typo or is the page no longer available?</span> Please check the address and try again.
      </p>
    </div>
  )
}