// const Card = ({ children, headerSlot, className }) => {
//   return <div className={className}>
//     <>{headerSlot}</>
//     {/* <section className="card shadow-md hover:shadow-md dark:text-gray-300 border dark:border-black rounded-xl lg:p-6 p-4 bg-white dark:bg-hexo-black-gray lg:duration-100"> */}
//     <section className="card shadow-md hover:shadow-md dark:text-gray-300 border dark:border-black rounded lg:p-6 p-4 bg-white dark:bg-hexo-black-gray lg:duration-100">
//         {children}
//     </section>
//   </div>
// }
// export default Card
// const Card = ({ children, headerSlot, className }) => {
//   return (
//     <div className={`${className} w-12/12`}>
//       <>{headerSlot}</>
//       <section className="card shadow-md hover:shadow-md dark:text-gray-300 border dark:border-black rounded lg:p-6 p-4 bg-white dark:bg-hexo-black-gray lg:duration-100">
//         {children}
//       </section>
//     </div>
//   )
// }
// export default Card

const Card = ({ children, headerSlot, className }) => {
  return (
    <div className={`${className} w-12/12`}>
      <>{headerSlot}</>
      <section className="card shadow-md hover:shadow-xl dark:text-gray-300 border dark:border-black rounded lg:p-6 p-4 bg-white dark:bg-hexo-black-gray transition-all duration-200 ease-in-out hover:scale-[1.02]">
        {children}
      </section>
    </div>
  )
}