export default function loading() {
  return (
    <div className='h-screen flex items-center justify-center max-w-[80vw] sm:max-w-[500px] mx-auto'>
      <div className="w-[300px] animate-pulse duration-1000">
        <img src="/assets/logo.png" alt="Logo - Spacelinkers" width={0} height={0} sizes="100vw" className="cursor-pointer w-[100%] h-auto" />            
      </div>
    </div>
  )
}

