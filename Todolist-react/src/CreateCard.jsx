function CreateCard(){
    return(
        <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 ">
  <div className="p-4">
    <h6 className="mb-2 text-slate-800 text-xl font-semibold text-center">
      Create a Task
    </h6>
    <p className="text-slate-600 leading-normal font-light text-center">
      Create your own task so that you dont forget to do something important
    </p>
  </div>
  <div className="px-4 pb-4 pt-0 mt-2 text-center">
    <button className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      Read more
    </button>
  </div>
</div>  
    )
}
export default CreateCard