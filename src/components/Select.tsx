import {  useRecoilState, useRecoilValue } from "recoil";
import { Categories, categoryState, toDoSelector, toDoState } from "../atoms";
import { useForm } from "react-hook-form";




function Select() {
    const [category , setCategory] = useRecoilState(categoryState);
    const oninput = (event:React.FormEvent<HTMLSelectElement>) => {
       setCategory(event.currentTarget.value as any);
  };
    const {register , watch , handleSubmit} = useForm();
    const dd = watch().category
    const onValid = (data:any) => {
         const dd = data.category;
         setCategory((data:any) => {
   
           return {
                 ...data.category,
                 [`${data}`]: [],
           }
        } )
    }
return (
    <form onSubmit={handleSubmit(onValid)}>
      <input {...register("category")} placeholder="write new category" />
      <button>Add new Category</button>
      <select value={category} onInput={oninput}>
        <option value={Categories.TO_DO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
        {dd?<option value={dd}>{dd}</option> : null}
       </select>
       </form>
)
}

export default Select;
