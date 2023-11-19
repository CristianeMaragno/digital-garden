export const Status = (props:  { completed?: Boolean }) => {
    var source;
    var tooltip;
    if(props.completed){
        source = "https://res.cloudinary.com/dbx69s7id/image/upload/v1696338453/plant_jl7lbm.svg";
        tooltip = "Plant";//"Plants are posts i've invested significant time into. They won't significantly change – aside from the occassional adjustment."
    }else{
        source = "https://res.cloudinary.com/dbx69s7id/image/upload/v1696338453/seed_fripge.svg";
        tooltip = "Growing Seed"//"Seeds are posts i've revised and worked on a bit. They still need refinement."
    }

	return (
		<main className="group inline">
            <div className="p-1 cursor-pointer flex justify-end">
                <img src={source} alt="status" height={40} width={40}/>
            </div>
            <span className="group-hover:opacity-100 w-52 break-words z-10 transition-opacity bg-gray-800 p-1 text-sm text-gray-100 rounded-md -mt-8 
            -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">
                {tooltip}
            </span>
		</main>
	);
};